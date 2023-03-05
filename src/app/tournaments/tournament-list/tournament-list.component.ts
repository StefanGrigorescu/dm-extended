import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TournamentState } from '../tournament-state.enum';
import { Tournament } from '../tournament.model';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  tournaments: Tournament[];

  toggleCurrentTournaments : boolean = true;

  constructor(private tournamentsService: TournamentsService) { }

  ngOnInit() {
    this.tournaments = this.tournamentsService
      .getTournaments(this.toggleCurrentTournaments);
  }

  onToggleChange(): void {
    this.toggleCurrentTournaments = !this.toggleCurrentTournaments;
    this.tournamentsService.tournamentSelected.emit(null);

    this.tournaments = this.tournamentsService
      .getTournaments(this.toggleCurrentTournaments);
  }
}

