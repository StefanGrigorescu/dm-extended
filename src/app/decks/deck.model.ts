
export class Deck {
    public userId: number;

    public deckId: number;
    public name: string;
    public coverCardImgUrl: string;
    public coverCardCivilization: string;
    public isFavorite: boolean = false;
    
    // If it is a tournament deck
    public tournamentId: number;
    public tournamentPlayerId: number;

    constructor(
        deckId,
        name,
        coverCardImgUrl,
        coverCardCivilization,
        // isFavorite,
        // userId,
        // tournamentId,
        // tournamentPlayerId
    )
    {
        this.deckId = deckId;
        this.name = name;
        this.coverCardImgUrl = coverCardImgUrl;
        this.coverCardCivilization = coverCardCivilization;
    }
}