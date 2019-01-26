import { Discount } from './discount'

export class Buy1Get1Free extends Discount {
    constructor(numberToBuy, numberOff, limit) {
        super(numberToBuy, limit)
        this.numberOff = numberOff
    }
}