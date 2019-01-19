import { Database } from "./database";
import {inject, injectable} from "inversify";
import { User } from "../../../common/communication/user";
import Types from "../types";
import { UserValidationService } from "../routes/signup/services/userValidationService";

@injectable()
export class DatabaseService{

    private database: Database;

    public constructor(@inject(Types.UserValidationService) private UserValidationService: UserValidationService){
        this.database = new Database();
    }
    
    public add(user: User){
        
        let errors : string[] = []
        this.UserValidationService.validateUser(user, errors);
        
        if (this.contains(user))
            errors.push("Email or Username already used");
        
        if(errors.length == 0)
            this.database.add(user);
        else
            throw new UserError(errors);

    }

    public contains(user: User): boolean {

        // for(let use of this.database.users){

        //     if(user.name == use.name || user.email == use.email)
        //         return true;
        //    }     
        // return false;

        
        return !this.database.users.every(
        ( use => {
            if(user.name !== use.name && user.email !== use.email)
                return true;
            else
                return false; 
        }));  
    
    }
    

}
export class UserError extends Error {

    public constructor(public readonly errors: string[]) {
        super();
    }

}