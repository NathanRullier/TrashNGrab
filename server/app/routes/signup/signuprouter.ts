import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import {RouterInterface} from "../../routerInterface";
import Types from "../../types";
import { SignupController } from "./signupcontroller";


@injectable()
export class SignupRouter implements RouterInterface {
    public readonly url: string = "/signup";

    public constructor(@inject(Types.SignupController) private signupController: SignupController) {}

    public get routes(): Router {
         const router: Router = Router();

         router.post("/:type", (req: Request, res: Response) => {
              this.signupController.signup(req, res);
        });

        return router;
    }
}