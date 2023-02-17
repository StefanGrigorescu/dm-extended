import { Component, OnInit } from '@angular/core';
import { RoutesManager } from 'src/common/routes-manager';
import { TournamentState } from './tournament-state.enum';
import { Tournament } from './tournament.model';
import { TournamentsService } from './tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
  providers: [TournamentsService]
})
export class TournamentsComponent implements OnInit {
  selectedTournament: Tournament;
  tournaments: Tournament[] = [];

  routesManager = RoutesManager;
  currentPage = RoutesManager.tournamentsView;

  constructor(
    private tournamentsService: TournamentsService
  ) {}

  ngOnInit(): void {
    this.tournaments = this.tournamentsService.getTournaments();
    this.tournamentsService
      .tournamentSelected
      .subscribe(
        (tournament: Tournament) => {
          this.selectedTournament = tournament;
        }
      );
  }

  onOpenedCreateForm()
  {
    this.currentPage = RoutesManager.tournamentsCreate;
  }

  onCancelTournamentCreate()
  {
    this.currentPage = RoutesManager.tournamentsView;
  }

  onTournamentCreated(tournament: Tournament)
  {
    console.log("TournamentsComponent: onTournamentDefined: " + tournament.name)
    
    this.currentPage = RoutesManager.tournamentsView;
  }
}
