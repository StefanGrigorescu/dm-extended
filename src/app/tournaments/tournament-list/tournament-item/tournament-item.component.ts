import { Component, Input } from '@angular/core';
import { Tournament } from '../../tournament.model';

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.scss']
})
export class TournamentItemComponent {
  @Input() tournament: Tournament;
}
