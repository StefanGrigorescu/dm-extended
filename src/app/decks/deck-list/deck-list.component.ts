import { Component } from '@angular/core';
import { Card } from 'src/app/cards/card.model';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent {

  decks: Deck[] = [
    new Deck
    (
      0,
      "[FN] FN Rush",
      "https://shobu.io/assets/cards/all/48ab3f2b-4ae3-41a4-ae6f-61b49c958bdb.jpg",
      "green"
    ),
    new Deck
    (
      1,
      "[F] Fire Aggro",
      "https://shobu.io/assets/cards/all/eac1bc57-bdf8-4629-86b3-9609d1bf2aba.jpg",
      "red"
    ),
    new Deck
    (
      1,
      "[DW] Discard Party",
      "https://shobu.io/assets/cards/all/ae797f95-54b1-48e9-9216-f315b39826bd.jpg",
      "gray"
    ),
  ];

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
}
