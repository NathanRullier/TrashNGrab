import { UserId } from "../users/usersid";
import { injectable } from "inversify";

@injectable()
export class Producer extends UserId {
    
    private adress: string;
    private zipcode: string;

    public constructor(name: string,  password: string,  email:string, adress: string, zipcode: string) {

        super(name,password,email);
        this.adress = adress;
        this.zipcode = zipcode;

    }

    

}
