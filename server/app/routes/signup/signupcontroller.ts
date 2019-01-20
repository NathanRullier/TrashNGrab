import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import  {User} from "../../../../common/communication/user";
import Types from "../../types";
import {DatabaseService} from "../../database/dataservice"

@injectable()
export class SignupController {

    public constructor(@inject (Types.DatabaseService) private DatabaseService: DatabaseService) {}

    public signup(req: Request, res: Response): void {
        const userReq : User = req.body;
        try {
            this.DatabaseService.add(userReq);
        } catch(error) {
            res.status(400);
            res.json(error);
            return;
        }
        console.log(this.DatabaseService.contains(userReq));
        res.status(201);
        res.json({ "type": req.params.type, "user:": userReq});
    }


}
