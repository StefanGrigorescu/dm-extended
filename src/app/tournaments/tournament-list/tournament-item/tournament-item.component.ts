import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tournament } from '../../tournament.model';

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.scss']
})
export class TournamentItemComponent {
  @Input() tournament: Tournament;
  @Output() tournamentItemSelect: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    
  }

  onSelect()
  {
    this.tournamentItemSelect.emit();
  }
}
