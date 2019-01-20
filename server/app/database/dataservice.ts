import { Database } from "./database";
import {inject, injectable} from "inversify";
import { User } from "../../../common/communication/user";
import Types from "../types";
import { UserValidationService } from "../routes/signup/services/userValidationService";
import { Consumer } from "../routes/users/consumer";
import { Producer } from "../routes/users/producer";

@injectable()
export class DatabaseService{

    private database: Database;

    public constructor(@inject(Types.UserValidationService) private UserValidationService: UserValidationService){
        this.database = new Database();
        console.log("newData");
        }
    
    public addConsumer(user: Consumer){
        
        let errors : string[] = []
        this.UserValidationService.validateUser(user, errors);
        
        if (this.contains(user))
            errors.push("Email or Username already used");
        
        if(errors.length == 0)
            this.database.addConsumer(user);
        else
            throw new UserError(errors);

    }
    public addProducer(user: Producer){
        
        let errors : string[] = []
        this.UserValidationService.validateUser(user, errors);
        
        if (this.contains(user))
            errors.push("Email or Username already used");
        
        if(errors.length == 0)
            this.database.addProducer(user);
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

    public getConsumer(name: string, password: string): Consumer  {
        
        for(let user of this.database.consumers) {
            if((name === user.name || name === user.email) && password === user.password)
                return user;
        }
        throw new UserError(["User not found"]);

    }

    public getProducer(name: string, password: string): Producer  {
        
        for(let user of this.database.producers) {
            if((name === user.name || name === user.email) && password === user.password)
                return user;
        }
        throw new UserError(["User not found"]);

    }

    public getConsumers(): Consumer[] {

        let consumers: Consumer[] = [];
        this.database.consumers.forEach(use => {
            consumers.push(use);
        });
        return consumers;
    }
    
    public getProducers(): Producer[] {

        let producers: Producer[] = [];
        this.database.producers.forEach(use => {
            producers.push(use);
        });
        return producers;
    }

    public valid(user: User): boolean {

        for(let use of this.database.users) {

            if((user.name == use.name || user.email == use.email) && user.password == use.password)
                return true;

        }
        return false;

    } 
    

}
export class UserError extends Error {

    public constructor(public readonly errors: string[]) {
        super();
    }

}