export class TournamentPlayer {
    public tournamentPlayerId: number;

    public userId: string;
    public tournamentId: number;

    public matchesWon: number = 0;
    public matchesLost: number = 0;
    public matchesDrawed: number = 0;

    public getMatchesPlayed(): number {
        return this.matchesWon + this.matchesLost + this.matchesDrawed;
    }
}