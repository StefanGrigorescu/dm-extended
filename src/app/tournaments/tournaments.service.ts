import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TournamentState } from './tournament-state.enum'
import { Tournament } from './tournament.model';

@Injectable()    // @Injectable is used when we need to inject something into a service with DI
export class TournamentsService {
    private tournaments: object = this.createNewTournamentsObject();

    getTournaments(isArchived: boolean): Tournament[] {
        var tournaments: Tournament[] = Object.values(this.tournaments);

        if(isArchived)
        {
          return tournaments.filter(t => t.state === TournamentState.Archived);
        }
        
        return tournaments.filter(t => t.state !== TournamentState.Archived);
    }

    getTournamentById(tournamentId: number): Observable<Tournament> {
        return of(this.tournaments[tournamentId]);
    }

    createTournament(tournament: Tournament): number {
        var existingIds: number[] = Object.keys(this.tournaments).map(id => Number(id));
        var newId = Math.max(...existingIds) + 1;

        this.tournaments[newId] = tournament;
        return newId;
    }

    updateTournament(id: number, updatedTournament: Tournament): void {
        if(!(id in this.tournaments))
        {
            return;
        }

        this.tournaments[id] = updatedTournament;
    }

    private createNewTournamentsObject(): object {
        let privateTournaments: object = {
            0: new Tournament(
                0,
                "[Current] Mock Defined State Tournament (with extra text)",
                "short description here - it really should not get too long as it is supposed to go on list items",
                "Some descriptive text but some descriptive text and... some descriptive text, also with... um... some descriptive text and... some descriptive text. Did I mention some descriptive text?",
                (function(d){ d.setDate(d.getDate()+4); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+12); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+19); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+25); return d})(new Date),
                TournamentState.Defined
            ),
            1: new Tournament(
                1,
                "Mock Defined State Tournament",
                "short description",
                "Some descriptive text",
                (function(d){ d.setDate(d.getDate()+4); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+12); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+19); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+25); return d})(new Date),
                TournamentState.Defined
            ),
            2: new Tournament(
                2,
                "Mock Register State Tournament",
                "quick info",
                "Some descriptive text",
                (function(d){ d.setDate(d.getDate()-2); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+1); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+5); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+12); return d})(new Date),
                TournamentState.Register
            ),
            3: new Tournament(
                3,
                "Mock Active State Tournament",
                "small text",
                "Some descriptive text",
                (function(d){ d.setDate(d.getDate()-3); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
                (function(d){ d.setDate(d.getDate()); return d})(new Date),
                (function(d){ d.setDate(d.getDate()+2); return d})(new Date),
                TournamentState.Active
            ),
            4: new Tournament(
                4,
                "Mock Ended State Tournament",
                "you little mock!",
                "Some descriptive text",
                (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-23); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
                TournamentState.Ended
            ),
            5: new Tournament(
                5,
                "[Archived] From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "HISTORY, PURPOSE AND USAGE\nLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\nL“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nThe purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
                (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-23); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
                TournamentState.Archived
            ),
    
            // The archived tournaments will be filtered and depending on the current view being redered,
            // either them or the current tournaments will be displayed in the list
            6: new Tournament(
                6,
                "Mock Archived State Tournament 1",
                "archived (short desc. here)",
                "Some descriptive text",
                (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-23); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
                TournamentState.Archived
            ),
            7: new Tournament(
                7,
                "Mock Archived State Tournament 2",
                "short desc.: archived",
                "Some descriptive text",
                (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-23); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
                (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
                TournamentState.Archived
            ),
        };

        const newTournaments = {};
        TournamentsService.newTournamentId = Math.max(...Object.keys(privateTournaments).map(key => Number(key)));

        for (const id in privateTournaments) {
            const tournament = privateTournaments[id];
            newTournaments[id] = tournament;

            for (let i = 0; i < 10; i++) {
                TournamentsService.newTournamentId++;
                newTournaments[TournamentsService.newTournamentId] = new Tournament(
                    TournamentsService.newTournamentId,
                    tournament.name,
                    tournament.shortDescription,
                    tournament.description,
                    tournament.startDate,
                    tournament.registrationDeadline,
                    tournament.startDate,
                    tournament.endDate,
                    tournament.state
                );
            }
        }
    
        return newTournaments;
    }

    public static newTournamentId: number = 0;
}
