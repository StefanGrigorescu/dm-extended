import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
export class DeckDetailComponent implements OnInit, OnDestroy {
  deck: Deck;
  deckCards: Cards = new Cards([]);
  poolCards: Cards = new Cards([]);
  
  private deckSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService,
    private decksService: DecksService
  ) { }

  ngOnInit(): void {
    var deckId: number = this.activatedRoute
      .snapshot
      .params['id'];
      
    this.deckSubscription = this.getSelectedDeck(deckId);

    // this.decksService
    //   .getCardsByDeckId(this.deck.deckId)
    //   .subscribe(deckCards => this.deckCards = deckCards);
    this.deckCards = this.decksService.getCardsByDeckId(this.deck.deckId);

    this.cardsService
      .getShobuIoCards()
      .subscribe(cards => {
        this.poolCards = cards;
        console.log("DeckDetailComponent: Received " + this.poolCards.length + " cards... Stored " + this.poolCards.length + " cards.");
      });
  }

  private getSelectedDeck(deckId: number): Subscription {
    return this.decksService
      .getDeckById(deckId)
      .subscribe(
        (deck: Deck) => {
          this.deck = deck;
      });
  }

  ngOnDestroy(): void {
    this.deckSubscription.unsubscribe();
  }
}
