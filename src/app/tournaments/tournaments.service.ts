import { EventEmitter, Injectable } from '@angular/core';
import { TournamentState } from './tournament-state.enum'
import { Tournament } from './tournament.model';

@Injectable()    // @Injectable is used when we need to inject something into a service with DI
export class TournamentsService {
    tournamentSelected = new EventEmitter<Tournament>();

    private tournaments: object = {
        1: new Tournament(
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
            "Mock Ended State Tournament",
            "you little mock!",
            "Some descriptive text",
            (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
            (function(d){ d.setDate(d.getDate()-23); return d})(new Date),
            (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
            (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
            TournamentState.Ended
        ),

        // The archived tournaments will be filtered and depending on the current view being redered,
        // either them or the current tournaments will be displayed in the list
        5: new Tournament(
            "Mock Archived State Tournament 1",
            "archived (short desc. here)",
            "Some descriptive text",
            (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
            (function(d){ d.setDate(d.getDate()-23); return d})(new Date),
            (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
            (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
            TournamentState.Archived
        ),
        6: new Tournament(
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

  getTournaments(): Tournament[] {
    return Object.values(this.tournaments);
  }

  createTournament(tournament: Tournament) {
    var existingIds: number[] = Object.keys(this.tournaments).map(id => Number(id));
    var newId = Math.max(...existingIds) + 1;

    this.tournaments[newId] = tournament;
  }

  updateTournament(id: number, updatedTournament: Tournament): void {
    if(!(id in this.tournaments))
    {
        return;
    }

    this.tournaments[id] = updatedTournament;
  }
}
