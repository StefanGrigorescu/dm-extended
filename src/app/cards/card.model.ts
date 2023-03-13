export class Card {
    constructor(
        public uid: string,
        public name: string,
        public civilization: string,
        public race: string,
        public manaCost: number,
        public set: string,
        public type: string,

        public imgUrl: string = `https://shobu.io/assets/cards/all/${uid}.jpg`,
        public tierId: number = null,

        public copiesCount: number = 1
    ) {}

    isCardFromCivilization(civilization): boolean {
        return this.civilization.toLowerCase() === civilization.toLowerCase();
    }
    
    isCardFromAnyCivilization() {
        return this.isCardFromCivilization('fire') ||
        this.isCardFromCivilization('water') ||
        this.isCardFromCivilization('nature') ||
        this.isCardFromCivilization('light') ||
        this.isCardFromCivilization('darkness');
    }
}
