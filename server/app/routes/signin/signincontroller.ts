import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import  {User} from "../../../../common/communication/user";
import Types from "../../types";
import { DatabaseService } from "../../database/dataservice";

@injectable()
export class SigninController {

    public signin(req: Request, res: Response): void {
        const userReq : User = req.body;

        res.json({ "type": req.params.type, "user:": userReq});
    }


}
