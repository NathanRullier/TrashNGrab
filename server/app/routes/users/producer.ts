import { UserId } from "../users/usersid";
import { injectable } from "inversify";

@injectable()
export class Producer extends UserId {
    
    public constructor(name: string,  password: string,  email:string) {

        super(name,password,email);
      

    }

    

}
