import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import  {User} from "../../../../common/communication/user";
import Types from "../../types";
import {DatabaseService} from "../../database/dataservice"
import {EmailService} from "../../email/emailservice";

@injectable()
export class SignupController {

    public constructor(@inject (Types.DatabaseService) private DatabaseService: DatabaseService,
                       @inject (Types.EmailService) private emailService: EmailService) {}

    public signup(req: Request, res: Response): void {
        const userReq : User = req.body;
        try {
            this.DatabaseService.add(userReq);
<<<<<<< HEAD
            // this.emailService.sendGreeting(userReq.email);
=======

            const emailService: EmailService = new EmailService();
            // emailService.sendGreeting(userReq.email);
>>>>>>> commit before change of data

        } catch(error) {
            res.status(400);
            res.json(error);
            return;
        }
        res.json({ "type": req.params.type, "user:": userReq});
    }


}
