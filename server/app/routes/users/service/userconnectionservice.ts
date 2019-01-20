import { UserId } from "../../users/usersid";
import { Consumer } from "../../users/consumer";
import { Producer } from "../../users/producer";
import { injectable, inject } from "inversify";
import { User } from "../../../../../common/communication/user";
import { DatabaseService } from "../../../database/dataservice";
import Types from "../../../types";

@injectable()
export class UserConnectionService{

    private connectedConsumers : Consumer[] = [];
    private connectedProducers : Producer[] = [];
    public constructor(@inject (Types.DatabaseService) private DatabaseService: DatabaseService) {}

    public connectConsumer(name: string, password: string): Consumer {

        let user:Consumer = this.DatabaseService.getConsumer(name,password);
        this.connectedConsumers.push(user);
        return user;
    } 
    public connectProducer(name: string, password: string): Producer {

        let user:Producer = this.DatabaseService.getProducer(name,password);
        this.connectedProducers.push(user);
        return user;
    } 

    public disconnectConsumer(user: Consumer) {

        const index = this.connectedConsumers.indexOf(user);
        if (index > -1) {
            this.connectedConsumers.splice(index, 1);
        }
    }
    public disconnectProducer(user: Producer) {

        const index = this.connectedProducers.indexOf(user);
        if (index > -1) {
            this.connectedProducers.splice(index, 1);
        }
    }

    public connectedConsumer(user: Consumer) {

        return this.connectedConsumers.indexOf(user) != 1;
    }
    public connectedProducer(user: Producer) {

        return this.connectedProducers.indexOf(user) != 1;
    }

}