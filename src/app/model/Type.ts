export class Type {
    slot: number;
    type: string;
    url: string;


    constructor(type: any) {
        this.slot = type.slot;
        this.type = type.type['name'];
        this.url = type.type['url'];
    }
}