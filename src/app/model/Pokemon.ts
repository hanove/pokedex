import { Type } from "./Type";

export class Pokemon {
    id: number;
    name: string;
    type: Array<Type>;
    spriteFront: string;
    spriteShiny: string;
    // gen?: string;
    artwork: String;

    constructor(poke: any) {
        this.id = poke.id;
        this.name = poke.name;
        this.type = new Array<Type>;
        for (let tp of poke.types) {
            let aux = new Type(tp);
            this.type.push(aux);
        }
        this.spriteFront = poke.sprites['front_default'];
        this.spriteShiny = poke.sprites['front_shiny'];
        this.artwork = poke.sprites['other']['official-artwork']['front_default'];
    }
}