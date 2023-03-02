import { Component, Input } from '@angular/core';
import { Card } from 'src/app/cards/card.model';
import { Cards } from 'src/app/cards/cards-model';
import { CardsService } from 'src/app/cards/cards.service';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss'],
  providers: [CardsService]
})
export class DeckDetailComponent {
  @Input() deck: Deck;
  deckCards: Cards;
  poolCards: Cards;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this
      .cardsService
      .getShobuIoCards()
      .subscribe(cards => {
        this.poolCards = cards;
        console.log("received: " + this.poolCards.length + " cards. stored: " + this.poolCards.length + " cards");
      });
  }
}
