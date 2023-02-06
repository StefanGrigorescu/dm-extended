// Tournament cards are used to override default card properties inside of a specific tournament context.
export class TournamentCard {
    public tournamentCardId;

    public tournamentId: number;
    public cardUid: number;
    public specificTierId: number = null;
}
