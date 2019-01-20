import { Container } from "inversify";
import Types from "./types";
import { Server } from "./server";
import { Application } from "./app";
import { Route } from "./routes/index";
import { Routes } from "./routes";
import { SignupController} from "./routes/signup/signupcontroller";
import { SignupRouter} from "./routes/signup/signuprouter";
import { SigninController} from "./routes/signin/signincontroller";
import { SigninRouter} from "./routes/signin/signinrouter";
import { UserValidationService } from "./routes/signup/services/userValidationService";
import { DatabaseService } from "./database/dataservice";
<<<<<<< HEAD
import {EmailService} from "./email/emailservice";
=======
import { UserConnectionService } from "./routes/users/service/userconnectionservice";
>>>>>>> marche

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);
container.bind(Types.Routes).to(Routes);

container.bind(Types.Index).to(Route.Index);
container.bind(Types.SignupController).to(SignupController);
container.bind(Types.SignupRouter).to(SignupRouter);
container.bind(Types.SigninController).to(SigninController);
container.bind(Types.SigninRouter).to(SigninRouter);
container.bind(Types.UserValidationService).to(UserValidationService);
container.bind(Types.DatabaseService).to(DatabaseService).inSingletonScope();
<<<<<<< HEAD
container.bind(Types.EmailService).to(EmailService);
=======
container.bind(Types.UserConnectionService).to(UserConnectionService);
>>>>>>> marche

export { container };
