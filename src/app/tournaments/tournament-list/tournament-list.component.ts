import { Component, OnInit } from '@angular/core';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  currentTournaments: Tournament[] = [
    new Tournament(
      "Mock Defined State Tournament",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()+4); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+12); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()+19); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+25); return d})(new Date),
    ),
    new Tournament(
      "Mock Register State Tournament",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-2); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+1); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()+5); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+12); return d})(new Date),
    ),
    new Tournament(
      "Mock Active State Tournament",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-3); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+2); return d})(new Date),
    ),
    new Tournament(
      "Mock Ended State Tournament",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-23); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
    ),
  ];

  archivedTournaments: Tournament[] = [
    new Tournament(
      "Mock Archived State Tournament 1",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-23); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
    ),
    new Tournament(
      "Mock Archived State Tournament 2",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()-28); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-23); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()-11); return d})(new Date),
      (function(d){ d.setDate(d.getDate()-1); return d})(new Date),
    ),
  ];

  toggleCurrentTournaments : boolean = true;

  constructor() {

  }

  ngOnInit() {

  }
}

