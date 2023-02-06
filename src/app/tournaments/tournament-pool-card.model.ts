/* Tournament pool cards define a pool in a tournament context. 
 If the tournament is defined to use individual pools per player,
 the tournamentPlayerId property will be set and more pools will be defined in the context of a tournament, one per each registered player
*/
export class TournamentPoolCard {
    public tournamentPoolCardId: number;

    public tournamentCardId;

    public tournamentId: number;
    public cardUid: number;
    public tournamentPlayerId: string = null;  // This property is set only when pools are not shared and draft is set to false (one pool per player to build a deck).

    public cardCopiesCount: number;
}
