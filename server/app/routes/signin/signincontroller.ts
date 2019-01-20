import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import  {User} from "../../../../common/communication/user";
import Types from "../../types";
import { DatabaseService } from "../../database/dataservice";
import { UserConnectionService } from "../users/service/userconnectionservice";

@injectable()
export class SigninController {

    public constructor(@inject(Types.UserConnectionService) private UserConnectionService: UserConnectionService) {}

    public signin(req: Request, res: Response): void {
        const name: string = req.body.name;
        const password: string = req.body.password;
        let userReq: User;
        try {
            if (req.params.type == "consumer") {
                userReq = this.UserConnectionService.connectConsumer(name,password);
            }
            else
            {
                userReq = this.UserConnectionService.connectProducer(name,password);
            }

        } catch (error) {
            res.status(401);
            res.json(error);
            return;
        }
        res.json({ "type": req.params.type, "user:": userReq});
    }


}
