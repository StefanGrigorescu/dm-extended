export class Tier{
    constructor(
        public tierId: number,
        // unique name
        public name: string,
        public description: string,
        public color: string,
        public imageUrl: string
    ) {}
}