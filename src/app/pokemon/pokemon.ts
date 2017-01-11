class Pokemon {

    private nationalDexID : number;
    private name : String;
    private levelRate : number;
    private catchRate : number;
    private preevolution : number;
    private image : String;
    private type1ID : number = null;
    private type2ID : number = null;

    constructor(
        nationalDexID:number,
        name:String,
        levelRate:number,
        catchRate:number,
        preevolution:number,
        image:string,
        type1ID:number,
        type2ID:number
    ) {
        this.nationalDexID = nationalDexID;
        this.name = name;
        this.levelRate = levelRate;
        this.catchRate = catchRate;
        this.preevolution = preevolution;
        this.image = image;
        this.type1ID = type1ID;
        this.type2ID = type2ID;
    }

}