import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deck } from '../deck.model';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit, OnDestroy {
  decks: Deck[] = [];
  getDecksSubscription: Subscription;

  constructor(private decksService: DecksService) { }

  ngOnInit(): void {
    this.getDecksSubscription = this.decksService
      .getDecks()
      .subscribe(decks => this.decks = decks);
  }

  // getCardById(id)
  // {
  //   var cards = {
  //     "48ab3f2b-4ae3-41a4-ae6f-61b49c958bdb": new Card("48ab3f2b-4ae3-41a4-ae6f-61b49c958bdb", "Mystic Inscription", "nature", "", 6, "dm-04", "Spell", 2, null, 4),                    // tier B (good)
  //     "eac1bc57-bdf8-4629-86b3-9609d1bf2aba": new Card("eac1bc57-bdf8-4629-86b3-9609d1bf2aba", "Milieus, the Daystretcher", "light", "Berserker", 5, "dm-04", "Creature", 3, null, 1),  // tier C (not really seen)
  //     "ae797f95-54b1-48e9-9216-f315b39826bd": new Card("ae797f95-54b1-48e9-9216-f315b39826bd", "Ultracide Worm", "darkness", "Parasite Worm", 6, "dm-02", "Creature", 2, null, 2),       // tier B (good)
  //   };

  //   return cards[id];
  // }

  canCreateNewDeck()
  {
    return true;  
    /*
      Depending on the tournament settings, like fixedDeck, this will not always be true.
      Later I will add the logic to communicate with a tournament component and fetch the necessary to implement this condition.
    */
  }

  ngOnDestroy(): void {
    this.getDecksSubscription.unsubscribe();
  }
}
