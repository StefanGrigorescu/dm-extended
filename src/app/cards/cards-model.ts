import { Card } from './card.model';

export class Cards extends Array<Card> {
    constructor(cards: Card[] | Cards)
    {
        super(...cards);
        
        this.civilizations = ["Fire", "Water", "Nature", "Light", "Darkness"];
        
        var racesSet = new Set(cards.map(card => card.race));
        if (racesSet.has("")) {
            racesSet.delete("");
        }
        this.races = [...racesSet];
        this.races.sort();
        this.races = ["Spell", ...this.races];

        this.sets = [...new Set(cards.map(card => card.set))];
        this.sets.sort();
    }
    
    public civilizations: string[];
    public races: string[];
    public sets: string[];


    public showAll: boolean = true;

    public nameFilter: string = "";

    public civilizationFilter: string = ""; // dd
    public raceFilter: string = "";    // dd
    public setFilter: string = ""; // dd

    public sortBy: string = "";
    public sortAscending: boolean = true;
    
    filteredAndSorted()
    {
        var cardsFilter: (card: Card) => boolean =
            this.getCardsFilter();
            
        var cardsFiltered = [...this].filter(cardsFilter);

        var result: Cards = new Cards(cardsFiltered);

        result.sort(this.getCardsSorter());

        return result;
    }

    private getCardsFilter(): (card: Card) => boolean
    {
        var nameFilter: (card: Card) => boolean = card =>
            this.nameFilter === "" ?
            true :
            card.name.toLowerCase().includes(this.nameFilter.toLowerCase());

        var civilizationFilter: (card: Card) => boolean = card =>
            this.civilizationFilter === "" ?
            true :
            card.civilization.toLowerCase() === this.civilizationFilter.toLowerCase();

        var raceFilter: (card: Card) => boolean; 
        switch(this.raceFilter)
        {
            case "":
                raceFilter = _ => true;
                break;
            case "Spell":
                raceFilter = card => card.type.toLocaleLowerCase() === this.raceFilter.toLocaleLowerCase();
                break;
            default:
                raceFilter = card => card.race.toLowerCase() === this.raceFilter.toLowerCase();
        }

        var setFilter: (card: Card) => boolean = card =>
            this.setFilter === "" ?
            true :
            card.set.toLowerCase() === this.setFilter.toLowerCase();

        return card => 
            nameFilter(card) &&
            civilizationFilter(card) &&
            raceFilter(card) &&
            setFilter(card);
    }

    private getCardsSorter(): (a: Card, b: Card) => number
    {
        var prop: (card: Card) => any;
        switch(this.sortBy)
        {
            case "name":
                prop = card => card.name;
                break;

            case "set":
                prop = card => card.set;
                break;

            case "civilization":
                prop = card => card.civilization;
                break;

            case "manaCost":
                prop = card => card.manaCost;
                break;

            case "race":
                prop = card => card.race;
                break;
            
            default:
                prop = card => card.name;
        }

        return (a, b) => {
            var sign = this.sortAscending ? 1 : -1;

            if (prop(a) < prop(b))
            {
                return -1 * sign;
            }
            if (prop(a) > prop(b)) 
            {
                return 1 * sign;
            }
            return 0;
        };
    }
}
