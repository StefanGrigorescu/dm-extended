
export class Deck {
    public userId: number;
    
    // If it is a tournament deck
    public tournamentId: number;
    public tournamentPlayerId: number;

    public deckId: number;
    public name: string;
    public coverCardImgUrl: string;
    public coverCardCivilizationColor: string;
    public isFavorite: boolean = false;

    constructor(
        deckId,
        name,
        coverCardImgUrl,
        coverCardCivilizationColor,
        // isFavorite,
        // userId,
        // tournamentId,
        // tournamentPlayerId
    )
    {
        this.deckId = deckId;
        this.name = name;
        this.coverCardImgUrl = coverCardImgUrl;
        this.coverCardCivilizationColor = coverCardCivilizationColor;
    }
}