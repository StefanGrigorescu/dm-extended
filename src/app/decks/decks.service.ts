import { EventEmitter } from "@angular/core";
import { Observable, of } from "rxjs";
import { Cards } from "../cards/cards-model";
import { Deck } from "./deck.model";

export class DecksService {
    deckSelected = new EventEmitter<Deck>();

    private decks: object = {
        1: new Deck
        (
          0,
          "[FN] FN Rush",
          "https://shobu.io/assets/cards/all/48ab3f2b-4ae3-41a4-ae6f-61b49c958bdb.jpg",
          "Nature"
        ),
        2: new Deck
        (
          1,
          "[F] Fire Aggro",
          "https://shobu.io/assets/cards/all/eac1bc57-bdf8-4629-86b3-9609d1bf2aba.jpg",
          "Fire"
        ),
        3: new Deck
        (
          1,
          "[DW] Discard Party",
          "https://shobu.io/assets/cards/all/ae797f95-54b1-48e9-9216-f315b39826bd.jpg",
          "Darkness"
        ),
    };

    getDecks(): Observable<Deck[]> {
        return of(Object.values(this.decks));
    }

    getCardsByDeckId(deckId: number): Cards {
      console.log("Decks Service: Fetched deck cards...");
      return new Cards([]);
    }
    
    createDeck(deck: Deck) {
        var existingIds: number[] = Object.keys(this.decks).map(id => Number(id));
        var newId = Math.max(...existingIds) + 1;
    
        this.decks[newId] = deck;
    }
    
    updateDeck(id: number, updatedDeck: Deck): void {
        if(!(id in this.decks))
        {
            return;
        }
    
        this.decks[id] = updatedDeck;
      }
}
