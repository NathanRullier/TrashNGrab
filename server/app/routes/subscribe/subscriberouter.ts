import {RouterInterface} from "../../routerinterface";
import {Request, Response, Router} from "express";
import {inject, injectable} from "inversify";
import Types from "../../types";
import {SubscribeController} from "./subscribecontroller";


@injectable()
export class SubscribeRouter implements RouterInterface {
    public readonly url: string = "/subscribe";

    constructor(@inject(Types.SubscribeController) private subscribeController: SubscribeController){ }

    get routes(): Router {
        const router: Router = Router();

        router.get("/categories", ((req, res) => {
            this.subscribeController.getCategories(req, res);
        }));

        router.post("/:category", (req: Request, res: Response) => {
            this.subscribeController.addUserToCategory(req, res);
        });
        return router;
    }

}
