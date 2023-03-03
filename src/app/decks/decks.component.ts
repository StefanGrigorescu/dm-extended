import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deck } from './deck.model';
import { DecksService } from './decks.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
  providers: [DecksService]
})
export class DecksComponent implements OnInit, OnDestroy {
  private selectedDeck: Deck;
  private deckSubscription: Subscription;

  constructor(
    private decksService: DecksService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getSelectedDeck(this.activatedRoute.snapshot.params["id"]);

    this.activatedRoute
      .params
      .subscribe((params: Params) => {
        var deckId: number = this.activatedRoute.snapshot.params["id"];
        this.deckSubscription = this.getSelectedDeck(deckId);
      });

    this.decksService
      .deckSelected
      .subscribe(
        (deck: Deck) => {
          this.selectedDeck = deck;
      });
  }

  private getSelectedDeck(deckId: number): Subscription {
    return this.decksService
      .getDeckById(deckId)
      .subscribe(
        (deck: Deck) => {
          this.selectedDeck = deck;
      });
  }

  ngOnDestroy(): void {
    this.deckSubscription.unsubscribe();
  }
}
