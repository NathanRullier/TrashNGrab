import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import {RouterInterface} from "../../routerInterface";
import Types from "../../types";
import { SigninController } from "./signincontroller";


@injectable()
export class SigninRouter implements RouterInterface {
    public readonly url: string = "/signin";

    public constructor(@inject(Types.SigninController) private signinController: SigninController) {}

    public get routes(): Router {
         const router: Router = Router();

         router.post("/:type", (req: Request, res: Response) => {
              this.signinController.signin(req, res);
        });

        return router;
    }
}