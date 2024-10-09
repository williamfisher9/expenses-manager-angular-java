export class Item {
    id : number;
    description : string;
    type : string;
    amount : number;

    constructor(id : number, description : string, type : string, amount : number) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.amount = amount;
    }
}
