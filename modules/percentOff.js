import { Discount } from "./discount";

export class PercentOff  extends Discount {
    constructor(numberToBuy, percentOff) {
        super(numberToBuy)
        this.percentOff = percentOff
    }
}