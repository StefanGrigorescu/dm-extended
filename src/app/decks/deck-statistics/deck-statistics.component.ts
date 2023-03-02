import { Component, Input } from '@angular/core';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-deck-statistics',
  templateUrl: './deck-statistics.component.html',
  styleUrls: ['./deck-statistics.component.scss']
})
export class DeckStatisticsComponent {
  @Input() deck: Deck;
}
