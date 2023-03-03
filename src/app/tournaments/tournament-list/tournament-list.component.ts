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
  private tournaments: Tournament[];

  toggleCurrentTournaments : boolean = true;

  constructor(private tournamentsService: TournamentsService) { }

  ngOnInit() {
    this.tournaments = this.tournamentsService
      .getTournaments();
  }

  onToggleChange(): void {
    this.toggleCurrentTournaments = !this.toggleCurrentTournaments;
    this.tournamentsService.tournamentSelected.emit(null);
  }

  // Probably this will be replaced with a pipe
  getTournaments(): Tournament[] {
    if(this.toggleCurrentTournaments)
    {
      return this
        .tournaments
        .filter(t => t.status != TournamentState.Archived);
    }
    
    return this
      .tournaments
      .filter(t => t.status === TournamentState.Archived);
  }
}

