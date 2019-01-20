import {EmailService} from "./email/emailservice";

export default  {
        Server: Symbol("Server"),
        Application: Symbol("Application"),
        Routes: Symbol("Routes"),
        Index: Symbol("Index"),
        SignupController: Symbol("SignupController"),
        SignupRouter: Symbol("SignupRouter"),
        SigninController: Symbol("SigninController"),
        SigninRouter: Symbol("SigninRouter"),
        UserValidationService: Symbol("UserValidationService"),
        DatabaseService: Symbol("DatabaseService"),
        EmailService: Symbol("EmailService"),
        SubscribeController: Symbol("SubscribeController"),
        SubscribeRouter: Symbol("SubscribeRouter")
};
