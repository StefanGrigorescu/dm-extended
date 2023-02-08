export class Card {
    public uid: string;
    public name: string;
    public civilization: string;
    public family: string;
    public manaCost: number;
    public set: string;
    public type: string;

    public defaultTierId: number = null;
    public specificTierId: number = null;
    public copiesCount: number = null;

    getImgUrl() {
        return `https://shobu.io/assets/cards/all/${this.uid}.jpg`;
    }

    getColor() {
        switch(this.civilization)
        {
            case "fire": return "red";
            case "light": return "yellow";
            case "water": return "blue";
            case "nature": return "green";
            case "darkness": return "dark-gray";
        }
    }

    constructor(
        uid: string,
        name: string,
        civilization: string,
        family: string,
        manaCost: number,
        set: string,
        type: string,
        defaultTierId: number = null,
        specificTierId: number = null,
        copiesCount: number = null
        )
    {
        this.uid = uid;
        this.name = name;
        this.civilization = civilization;
        this.family = family;
        this.manaCost = manaCost;
        this.set = set;
        this.type = type;
        this.defaultTierId = defaultTierId;
        this.specificTierId = specificTierId;
        this.copiesCount = copiesCount;
    }
}

// {"uid":"ae56a6c7-b118-44cb-bb6d-c45a9484c598","name":"Mystic Inscription","civilization":"nature","family":"","manaCost":6,"set":"dm-04","type":"Spell"},
// {"uid":"7a94b69e-335c-489a-8c5d-1294a9cb960f","name":"Milieus, the Daystretcher","civilization":"light","family":"Berserker","manaCost":5,"set":"dm-04","type":"Creature"}
// {"uid":"215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee","name":"Ultracide Worm","civilization":"darkness","family":"Parasite Worm","manaCost":6,"set":"dm-02","type":"Creature"}