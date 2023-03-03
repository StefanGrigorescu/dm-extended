import { Component, OnInit, } from '@angular/core';
import { Tournament } from './tournament.model';
import { TournamentsService } from './tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  selectedTournament: Tournament;

  constructor(private tournamentsService: TournamentsService) { }

  ngOnInit(): void {
    this.tournamentsService
      .tournamentSelected
      .subscribe(
        (tournament: Tournament) => {
          this.selectedTournament = tournament;
        }
      );
  }
}
