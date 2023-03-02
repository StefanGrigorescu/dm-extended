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
}
