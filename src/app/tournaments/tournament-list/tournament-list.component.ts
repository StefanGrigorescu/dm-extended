import { Component, OnInit } from '@angular/core';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  currentTournaments: Tournament[] = [
    new Tournament("Mock Tournament1", "Some descriptive text"),
    new Tournament("Mock Tournament2", "Some descriptive text"),
    new Tournament("Mock Tournament3", "Some descriptive text"),
    new Tournament("Mock Tournament4", "Some descriptive text"),
  ];

  archivedTournaments: Tournament[] = [
    new Tournament("Mock Tournament1", "Some descriptive text"),
    new Tournament("Mock Tournament2", "Some descriptive text"),
    new Tournament("Mock Tournament3", "Some descriptive text"),
    new Tournament("Mock Tournament4", "Some descriptive text"),
  ];

  toggleCurrentTournaments : boolean = true;

  constructor() {

  }

  ngOnInit() {

  }
}

