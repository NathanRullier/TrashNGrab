import { Router } from "express";
import { injectable } from "inversify";

@injectable()

export abstract class RouterInterface {
    public readonly url: string;
    public abstract get routes(): Router;
}
