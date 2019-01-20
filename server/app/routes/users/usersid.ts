import { User } from "../../../../common/communication/user";
import { injectable } from "inversify";

@injectable()
export class UserId extends User {

    private id: string;
    
    public constructor(name: string,  password: string,  email:string) {

        super(name,password,email);
      
        this.id = this.randomIdGenerator();

    }

    public randomIdGenerator(): string {

        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        
          return text;
    }

}
