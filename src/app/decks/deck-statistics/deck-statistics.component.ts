import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cards } from 'src/app/cards/cards-model';
import { Deck } from '../deck.model';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-deck-statistics',
  templateUrl: './deck-statistics.component.html',
  styleUrls: ['./deck-statistics.component.scss'],
  providers: [DecksService]
})
export class DeckStatisticsComponent implements OnInit, OnDestroy {
  deck: Deck;
  private deckCards: Cards = new Cards([]);
  private deckSubscription: Subscription;

  constructor(
    private decksService: DecksService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        const deckId: number = +params['id'];
        this.fetchDeckById(deckId);
      });
  }

  ngOnDestroy(): void {
    this.deckSubscription.unsubscribe();
  }

  private fetchDeckById(deckId: number): void {
    if (this.deckSubscription) {
      this.deckSubscription.unsubscribe();
    }
    
    this.deckSubscription = this.decksService
      .getDeckById(deckId)
      .subscribe(deck => {
        this.deck = deck;
        
      // this.decksService
      //   .getCardsByDeckId(this.deck.deckId)
      //   .subscribe(deckCards => this.deckCards = deckCards);
        this.deckCards = this.decksService
          .getCardsByDeckId(this.deck.deckId);
      });
  }
}
