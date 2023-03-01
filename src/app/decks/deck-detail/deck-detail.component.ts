import { Component } from '@angular/core';
import { Card } from 'src/app/cards/card.model';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent {
  deck: Deck;
  deckCards: Card[] = [];
}
