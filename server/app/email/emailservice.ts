import {createTransport} from "nodemailer";
import {injectable} from "inversify";

@injectable()
export class EmailService {

    public sendGreeting(emailAddress: string){
        let transporter = createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'trashngrab@gmail.com',
                pass: 'hackatown2019'
            }
        });

        let mailOptions = {
            from: "trashngrab@gmail.com", // sender address
            to: emailAddress, // list of receivers
            subject: "subscription", // Subject line
            text: "H! Welcome to trashNGrab", // plain text body
            html: '<b>NodeJS Email Tutorial</b>' // html body
        };

        transporter.sendMail(mailOptions, ((err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        }))

    }
}
