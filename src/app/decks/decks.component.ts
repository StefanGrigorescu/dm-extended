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
  public selectedDeck: Deck;

  constructor(private decksService: DecksService) {}

  ngOnInit(): void {
    this.decksService
      .deckSelected
      .subscribe(
        (deck: Deck) => {
          this.selectedDeck = deck;
    });
  }
}
