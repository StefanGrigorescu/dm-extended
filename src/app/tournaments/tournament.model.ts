export class Tournament {
    // Formats would be tournament presets rly (and several options remain available to configure)

    // Tournament property
    initialPoolLowerSize: number;    // for random initial pool sizes;  >= 60
    initialPoolUpperSize: number;    // for random initial pool sizes   <= 500
    initialPoolCanBeReset: boolean = false;
    deckMaxSize: number;             // between 40 and 70 (for some crazy draft)
    allowedSets: any = ["dm-01","dm-02","dm-03","dm-04","dm-05"];
    onlyMonoDecks: boolean = false;

    sharedPool: boolean = false;
    fixedDecks: boolean = false     // wether you register with a single deck at the beginning and cannot change it later. Can't use this with draft simultaneously.
    
    draft: boolean = false;         // wether you build your deck separately or in real time with your opponent. Draft always has a shared pool
    draftPickCount: number;         // how many cards the players see on screen when drafting;                          e.g.: 10
    draftPickDropped: number;       // how many of the draft cards on a screen will be dropped (the undrafted ones);    e.g.: 4

    defineTiers: boolean = true;
    cardsInPoolOfTier: object = {};     // Total cards of a specific tier in pool e.g: {"A": 20, "B": 40, "C": 20, "D": 20, "E": 0}
    maxCardCopiesOfTier: object = {};   // How many copies of a card of a specific tier in pool  e.g.: {"A": 2, "B": 4, "C": 2, "D": 2, "E": 0}
    // ^ with this you can have singletones

    hostId: number = null;
    hostName: string = null;
}