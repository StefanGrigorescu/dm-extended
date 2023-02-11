/* Tournament status, together with the dates defined in a tournament model,
 define the state of a tournament
 and depending on that state, specific behaviors are defined
*/
export enum TournamentStatus {
    Defined = 0,
    Published = 1,
    Register = 2,
    Active = 3,
    Ended = 4,
    Archived = 5
}

/*
    - Defined:
    * When the create form it submited, the tournament is created in the Defined state.
    
    - Published:
    * In this state, users can see the tournament in the tournaments list.
    * Card tiers and other configurations besides dates can not be modified anymore.
    * Register start, register end, active start and active end dates can be modified only within the limits of the tournament initial interval 
    (initial register start time - initial active end time)
    
    - Register:
    * When the register start date is reached, the users can start registering to the tournament.
    * After registering, the tournament player is created and the initial pool preview is displayed in a pop-up.
    If the initial pool can be reset, the players have a button displayed to randomly reset the pool (they are indicated how many resets are left).
    * After submitting the initial pool preview or leaving the pop-up, the initial pool is persisted and no other resets can be made.
    * At this point, the player can start creating his tournament decks.
    They can also be created from a User deck,
    but a preview pop-up is displayed showing the unavailable card copies for that deck,
    before adding it to the player tournament deck list or canceling the action.
    
    - Active:
    * When the active start date comes, the tournament is in the active state and players can start competing.
    * Additional match making logic would be defined later, at this moment it would depend on players to organize their matches.
    * Later feature: Prize logic will be defined.
        After a player wins/draws/loses a match: 
        Their pool could increase with a pre-defined (or a random value in a pre-defined interval) amount of cards from the tournament tiers.
    
    - Ended:
    * When the end date comes, no matches should affect the outcome.
    * The host declares a winner and the tournament goes in the archived state.
     
    - Archived:
    * The tournament will no longer be displayed in the tournaments list.
    * It will be displayed in a separate list of archived tournaments (chronologically ordered).
    * A player can access their deck list from any archived tournament and create a User deck from any deck in that list.
*/
