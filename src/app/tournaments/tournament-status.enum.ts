/* Tournament status, together with the dates defined in a tournament model,
 define the state of a tournament
 and depending on that state, specific behaviors are defined
*/
export enum TournamentStatus {
    Defined = 0,
    Register = 1,
    Active = 2,
    Ended = 3,
    Archived = 4
}