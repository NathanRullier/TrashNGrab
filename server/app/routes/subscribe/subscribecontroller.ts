import {inject, injectable} from "inversify";
import {Categories} from "../../database/categories";
import {Request, Response, Router} from "express";
import {Consumer} from "../users/consumer";
import {$enum} from "ts-enum-util";
import Types from "../../types";
import {SubscriptionManagement} from "./subscriptionmanagment";

@injectable()
export class SubscribeController {

    constructor(@inject(Types.SubscriptionManagement) private subscriptionManagement: SubscriptionManagement){}

    public getCategories(req: Request, res: Response): void {
        const keys: string[] = $enum(Categories).getKeys();
        res.json({"Categories": keys});
    }

    public addUserToCategory(req: Request, res: Response): void {
        const user: Consumer = req.body;
        const category: Categories = req.params.category;
        this.subscriptionManagement.subscribe(category, user);
        res.json({"user": user, "category" : category});
    }
}
