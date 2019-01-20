import {Consumer} from "../users/consumer";
import {Categories} from "../../database/categories";
import {injectable} from "inversify";


@injectable()
export class SubscriptionManagement {


    private map = new Map<Categories, Consumer[]>([
        [ Categories.Electronics.valueOf(), [] ],
        [ Categories.FruitsVegetable.valueOf(), [] ],
        [ Categories.HouseFurniture.valueOf(), [] ],
        [ Categories.MeatPoultry.valueOf(), [] ]
    ]);


    constructor(){
    }


    public subscribe(category: Categories, consumer: Consumer) {
        // @ts-ignore
        const array: Consumer[] =  this.map.get(category.valueOf());
        array.push(consumer);
    }
}
