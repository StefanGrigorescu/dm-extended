import { Component } from '@angular/core';
import { Tournament } from './tournament.model';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent {
  selectedTournament: Tournament;

  tournaments: Tournament[] = [
    new Tournament(
      "Mock Defined State Tournament",
      "short description",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()+4); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+12); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()+19); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+25); return d})(new Date),
    ),
    new Tournament(
      "Mock Register State Tournament",
      "quick info",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-2); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+1); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()+5); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+12); return d})(new Date),
    ),
    new Tournament(
      "Mock Active State Tournament",
      "small text",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-3); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+2); return d})(new Date),
    ),
    new Tournament(
      "Mock Ended State Tournament",
      "you little mock!",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-23); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
    ),
    
    // The archived tournaments will be filtered and depending on the current view being redered,
    // either them or the current tournaments will be displayed in the list
    new Tournament(
      "Mock Archived State Tournament 1",
      "archived (short desc. here)",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-23); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
    ),
    new Tournament(
      "Mock Archived State Tournament 2",
      "short desc.: archived",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-23); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
    ),
  ];

  onTournamentDefined(tournament: Tournament)
  {
    this.tournaments.push(tournament);
  }

  onTournamentSelected(tournament: Tournament)
  {
    this.selectedTournament = tournament;
  }
}
