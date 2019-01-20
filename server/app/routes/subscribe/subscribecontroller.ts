import {injectable} from "inversify";
import {Categories} from "../../database/categories";
import {Request, Response, Router} from "express";
import {Consumer} from "../users/consumer";
import {$enum} from "ts-enum-util";

@injectable()
export class SubscribeController {

    public getCategories(req: Request, res: Response): void {
        const keys: string[] = $enum(Categories).getKeys();
        res.json({"Categories": keys});
    }

    public addUserToCategorie(req: Request, res: Response): void {
        const user: Consumer = req.body;
        const categorie: Categories = req.params.category;

        res.json({"user": user, "cat" : categorie});
    }
}
