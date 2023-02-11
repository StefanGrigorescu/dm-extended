export class ApiCard {
    constructor(
        public uid: string,
        public name: string,
        public civilization: string,
        public family: string,
        public manaCost: number,
        public set: string,
        public type: string
    ) {}
}
