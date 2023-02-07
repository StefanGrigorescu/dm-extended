import { TournamentStatus } from "./tournament-status.enum";

export class Tournament {
    // Tournament descriptive properties
    public name: string;
    public shortDescription: string;
    public description: string = "";

    // Tournament config properties
    public initialPoolLowerSize: number;    // for random initial pool sizes;  >= 60
    public initialPoolUpperSize: number;    // for random initial pool sizes   <= 500
    public initialPoolMaxResetTimes: number = 0;
    public deckMaxSize: number;             // between 40 and 70 (for some crazy draft)
    public allowedSets: any = ["dm-01", "dm-02", "dm-03", "dm-04", "dm-05"];
    public onlyMonoDecks: boolean = false;

    public sharedPool: boolean = false;
    public fixedDecks: boolean = false     // wether you register with a single deck at the beginning and cannot change it later. Can't use this with draft simultaneously.

    public draft: boolean = false;         // wether you build your deck separately or in real time with your opponent. Draft always has a shared pool
    public draftPickCount: number;         // how many cards the players see on screen when drafting;                          e.g.: 10
    public draftPickDropped: number;       // how many of the draft cards on a screen will be dropped (the undrafted ones);    e.g.: 4

    public defineTiers: boolean = true;
    public cardsInPoolOfTier: object = {};     // Total cards of a specific tier in pool e.g: {"A": 20, "B": 40, "C": 20, "D": 20, "E": 0}
    public maxCardCopiesOfTier: object = {};   // How many copies of a card of a specific tier in pool  e.g.: {"A": 2, "B": 4, "C": 2, "D": 2, "E": 0}
    // ^ with this you can have singletones

    public registerStartTime: Date;
    public registerEndTime: Date;
    public activeStartTime: Date;
    public activeEndTime: Date;

    public winnerId: string = null;
    public winnerName: string = null;

    // Tournament calculated properties
    public tournamentId: number;
    public hostId: string;
    public hostName: string;
    public createdOn: Date = new Date();
    public status: TournamentStatus = TournamentStatus.Defined;
    public canceledOn: Date = null;
    public cancelReason: string = null;

    constructor(
        name: string,
        description: string,
        // deckMaxSize: number,             // between 40 and 70 (for some crazy draft), 
        // draftPickCount: number,         // how many cards the players see on screen when drafting;                          e.g.: 10, 
        // draftPickDropped: number,       // how many of the draft cards on a screen will be dropped (the undrafted ones);    e.g.: 4, 
        registerStartTime: Date,
        registerEndTime: Date,
        activeStartTime: Date,
        activeEndTime: Date,
        // hostId: string,
        // hostName: string
    ) {
        this.name = name;
        this.description = description ?? "";
        // this.deckMaxSize = deckMaxSize
        // this.draftPickCount = draftPickCount
        // this.draftPickDropped = draftPickDropped
        this.registerStartTime = registerStartTime
        this.registerEndTime = registerEndTime
        this.activeStartTime = activeStartTime
        this.activeEndTime = activeEndTime
        // this.hostId = hostId
        // this.hostName = hostName
    }
}
