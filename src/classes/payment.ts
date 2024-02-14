import {HasFormatter} from '../interfaces/HasFormatter.js';

export class payment implements HasFormatter{
    constructor(
        readonly recipient:string,
        private details:string,
        public amount:number,
    ){

    }
    format(){
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}

