import { User } from "../../../common/communication/user";

export class Database {

    private _users: User[] = [];
    public constructor(){}

    public add(user: User):void {
        this._users.push(user);
    }

    public get users(): User[] { return this._users; }

    
}