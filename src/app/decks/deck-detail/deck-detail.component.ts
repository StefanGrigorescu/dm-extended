import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cards } from 'src/app/cards/cards-model';
import { CardsService } from 'src/app/cards/cards.service';
import { Deck } from '../deck.model';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss'],
  providers: [CardsService, DecksService]
})
export class DeckDetailComponent implements OnInit, OnChanges {
  @Input() deck: Deck;
  deckCards: Cards;
  poolCards: Cards;

  constructor(
    private cardsService: CardsService,
    private decksService: DecksService
  ) { }

  ngOnInit(): void {
    this.cardsService
      .getShobuIoCards()
      .subscribe(cards => {
        this.poolCards = cards;
        console.log("received: " + this.poolCards.length + " cards. stored: " + this.poolCards.length + " cards");
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.decksService
    //   .getCardsByDeckId(this.deck.deckId)
    //   .subscribe(deckCards => this.deckCards = deckCards);

    this.deckCards = this.decksService
      .getCardsByDeckId(this.deck.deckId);
  }
}
