import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import  {User} from "../../../../common/communication/user";
import Types from "../../types";
import { DatabaseService } from "../../database/dataservice";

@injectable()
export class SigninController {

    public constructor(@inject (Types.DatabaseService) private DatabaseService: DatabaseService) {}

    public signin(req: Request, res: Response): void {
        const name: string = req.body.name;
        const password: string = req.body.password;
        let userReq: User;
        try {
            
            userReq = this.DatabaseService.getUser(name,password);

        } catch (error) {
            res.status(401);
            res.json(error);
            return;
        }
        res.json({ "type": req.params.type, "user:": userReq});
    }


}
