/* Tournament pool cards define a pool in a tournament context. 
 If the tournament is defined to use individual pools per player,
 the userId property will be set and more pools will be defined in the context of a tournament, one per each registered player
*/
export class TournamentPoolCard {
    public tournamentId: number;
    public cardUid: number;
    public userId: string = null;  // This property is set only when pools are not shared and draft is set to false (one pool per player to build a deck).

    public cardCopiesCount: number;
}
