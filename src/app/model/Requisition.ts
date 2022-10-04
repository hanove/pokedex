import { Pokemon } from "./Pokemon";

export class Requisition{
    count: number;
    next: string;
    previous: boolean;
    results: Array<Pokemon>;

    constructor(req: any){
        this.count = req.count;
        this.next = req.next;
        this.previous = req.previous;
        this.results = req.results;
    }
}