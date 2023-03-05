import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
export class DeckDetailComponent implements OnInit, OnChanges, OnDestroy {
  deck: Deck;
  deckCards: Cards;
  poolCards: Cards;
  
  private deckSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService,
    private decksService: DecksService
  ) { }

  ngOnInit(): void {
    // this.getSelectedDeck(this.activatedRoute.snapshot.params["id"]);

    this.activatedRoute
      .snapshot
      .params
      .subscribe((params: Params) => {
        var deckId: number = params["id"];
        this.deckSubscription = this.getSelectedDeck(deckId);
      });
    
    this.cardsService
      .getShobuIoCards()
      .subscribe(cards => {
        this.poolCards = cards;
        console.log("received: " + this.poolCards.length + " cards. stored: " + this.poolCards.length + " cards");
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

  ngOnChanges(changes: SimpleChanges): void {
    // this.decksService
    //   .getCardsByDeckId(this.deck.deckId)
    //   .subscribe(deckCards => this.deckCards = deckCards);

    this.deckCards = this.decksService
      .getCardsByDeckId(this.deck.deckId);
  }
}
