import { Component, Input } from '@angular/core';
import { Tournament } from '../../tournament.model';
import { TournamentsService } from '../../tournaments.service';

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.scss']
})
export class TournamentItemComponent {
  @Input() tournament: Tournament;

  constructor(private tournamentsService: TournamentsService) {
    
  }

  onSelect()
  {
    this.tournamentsService.tournamentSelected.emit(this.tournament);
  }
}
