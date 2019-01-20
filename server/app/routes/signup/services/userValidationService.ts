import { injectable } from "inversify";
import { User } from "../../../../../common/communication/user"

@injectable()
export class UserValidationService {

    private readonly MAX_LENGTH: number = 20;
    private readonly MIN_LENGTH: number = 3;
    private readonly REGEX: RegExp = new RegExp(/^[a-z0-9]+$/i);

    private isAlphaNumeric(str: string): boolean {
        return str.match(this.REGEX) !== null;
    }

    public validateName(name: string, errors: string[]): void {
        if (name.length < this.MIN_LENGTH || name.length > this.MAX_LENGTH) {
            errors.push(`username must be between ${this.MIN_LENGTH} and ${this.MAX_LENGTH}`);
        }

        if (!this.isAlphaNumeric(name)) {
            errors.push("username must only alphanumeric characters");
        }
    }

    public validateUser(user : User, errors: string[]):void  {

        this.validateName(user.name,errors);

    }



}