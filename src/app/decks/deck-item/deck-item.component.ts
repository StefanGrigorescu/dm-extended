import { Component, Input } from '@angular/core';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-deck-item',
  templateUrl: './deck-item.component.html',
  styleUrls: ['./deck-item.component.scss']
})
export class DeckItemComponent {
  @Input() deck: Deck;
}
