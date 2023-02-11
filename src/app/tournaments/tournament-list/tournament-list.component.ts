import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  @Input() tournaments: Tournament[];
  @Output() tournamentSelect: EventEmitter<Tournament> = new EventEmitter<Tournament>();

  toggleCurrentTournaments : boolean = true;

  constructor() {

  }

  ngOnInit() {

  }

  onTournamentSelected(tournament: Tournament)
  {
    this.tournamentSelect.emit(tournament);
  }
}

