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
    public tournamentName: string;

    constructor(
        deckId,
        name,
        coverCardImgUrl,
        coverCardCivilization,
        // isFavorite,
        // userId,
        tournamentId,
        // tournamentPlayerId,
        tournamentName
    )
    {
        this.deckId = deckId;
        this.name = name;
        this.coverCardImgUrl = coverCardImgUrl;
        this.coverCardCivilization = coverCardCivilization;
        this.tournamentId = tournamentId;
        this.tournamentName = tournamentName;
    }

    isCoverCardFromCivilization(civilization): boolean {
        return this.coverCardCivilization.toLowerCase() === civilization.toLowerCase();
    }

    isCoverCardFromAnyCivilization() {
        return this.isCoverCardFromCivilization('fire') ||
        this.isCoverCardFromCivilization('water') ||
        this.isCoverCardFromCivilization('nature') ||
        this.isCoverCardFromCivilization('light') ||
        this.isCoverCardFromCivilization('darkness');
    }
}
