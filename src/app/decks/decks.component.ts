import { Component, OnInit } from '@angular/core';
import { Deck } from './deck.model';
import { DecksService } from './decks.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
  providers: [DecksService]
})
export class DecksComponent implements OnInit {
  private selectedDeck: Deck;
  private decks: Deck[];

  constructor(
    private decksService: DecksService
  ) {}

  ngOnInit(): void {
    this.decks = this.decksService.getDecks();
    this.decksService
      .deckSelected
      .subscribe(
        (deck: Deck) => {
          this.selectedDeck = deck;
        }
      );
  }
}
