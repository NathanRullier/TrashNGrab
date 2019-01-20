import { User } from "../../../common/communication/user";
import { Consumer } from "../routes/users/consumer";
import { Producer } from "../routes/users/producer";

export class Database {

    private _consumers: Consumer[] = [];
    private _producers: Producer[] = [];
    public constructor(){}

    public addConsumer(user: Consumer):void {
        this._consumers.push(user);
    }

    public get consumers(): Consumer[] { return this._consumers; }

    public addProducer(user: Producer):void {
        this._producers.push(user);
    }

    public get producers(): Producer[] { return this._producers; }

    public get users(): User[] { return this._consumers.concat(this._producers); }

    
}