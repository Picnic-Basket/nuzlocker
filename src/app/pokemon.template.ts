import { Types } from './types'

class Pokemon {

    private pokeName: string;
    private pokeImage: string;
    private pokeType1: string;
    private pokeType2: string;
    private pokeEvo1: string;
    private pokeEvo2: string;
    private pokeCatch: string;
    private pokeLevel: string;

    constructor(name1: string, image1: string, type1: string, type2: string, evo1: string, evo2: string, catch1: string, level1: string) {
        this.pokeName = name1;
        this.pokeType1 = type1;
        this.pokeType2 = type2;
        this.pokeEvo1 = evo1;
        this.pokeEvo2 = evo2;
        this.pokeCatch = catch1;
        this.pokeLevel = level1;

    }
}

    let pidgey = new Pokemon("Pidgey", "nuzlocker\\src\\assets\\pokegen1\\016Pidgey.png", "Types.normal", "Types.normal", "Pidgeotto", "Pidgeot", "255", "medium slow");