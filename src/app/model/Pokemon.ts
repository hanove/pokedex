export class Pokemon {
    id: number;
    name: string;
    sprite: string;
    // gen?: string;
    artwork: String;

    constructor(poke: any){
        this.id = poke.id;
        this.name = poke.name;
        this.sprite = poke.sprites['front_default'];
        this.artwork = poke.sprites['other']['official-artwork']['front_default'];
    }
}