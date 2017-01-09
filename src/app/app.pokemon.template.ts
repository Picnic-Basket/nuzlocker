class Pokemon {

    pokeName: string;
    pokeImage: string;
    pokeType1: string;
    pokeType2: string;
    pokeEvo1: string;
    pokeEvo2: string;
    pokeCatch: string;
    pokeLevel: string;

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

    let pidgey = new Pokemon("Pidgey", "nuzlocker\\src\\assets\\pokegen1\\016Pidgey.png", "Normal", "Flying", "Pidgeotto", "Pidgeot", "255", "medium slow");