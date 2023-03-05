import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cards } from 'src/app/cards/cards-model';
import { Deck } from '../deck.model';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-deck-statistics',
  templateUrl: './deck-statistics.component.html',
  styleUrls: ['./deck-statistics.component.scss'],
  providers: [DecksService]
})
export class DeckStatisticsComponent implements OnChanges {
  @Input() deck: Deck;
  private deckCards: Cards;

  constructor(private decksService: DecksService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.decksService
    //   .getCardsByDeckId(this.deck.deckId)
    //   .subscribe(deckCards => this.deckCards = deckCards);

    this.deckCards = this.decksService
      .getCardsByDeckId(this.deck.deckId);
  }
}
