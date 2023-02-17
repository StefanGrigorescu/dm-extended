// Tournament cards are used to override default card properties inside of a specific tournament context.
export class TournamentCard {
    public tournamentCardId;

    public tournamentId: number;
    // public cardUid: number;  // either delete or only keep as a weak reference for archive/de-archive feature (only if needed)

    public name: string;
    public civilization: string;
    public family: string;
    public manaCost: number;
    public set: string;
    public type: string;

    public imgUrl: string;
    public tierId: number = null;
}
