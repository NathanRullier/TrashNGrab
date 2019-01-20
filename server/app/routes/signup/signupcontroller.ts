import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import  {User} from "../../../../common/communication/user";
import Types from "../../types";
import {DatabaseService} from "../../database/dataservice"
import {EmailService} from "../../email/emailservice";
import { Consumer } from "../../routes/users/consumer";
import { Producer } from "../../routes/users/producer";

@injectable()
export class SignupController {

    public constructor(@inject (Types.DatabaseService) private DatabaseService: DatabaseService,
                       @inject (Types.EmailService) private emailService: EmailService) {}

    public signup(req: Request, res: Response): void {
        
        let userReq;
        try {
<<<<<<< HEAD
            this.DatabaseService.add(userReq);
<<<<<<< HEAD
            // this.emailService.sendGreeting(userReq.email);
=======
=======
            
            if (req.params.type == "consumer") {
                    userReq = new Consumer(req.body.name, req.body.password, req.body.email);
                    this.DatabaseService.addConsumer(userReq);
                }
            else
                {
                    userReq = new Producer(req.body.name, req.body.password, req.body.email, req.body.adress, req.body.zipcode);
                    this.DatabaseService.addProducer(userReq);
                }
                
>>>>>>> marche

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
