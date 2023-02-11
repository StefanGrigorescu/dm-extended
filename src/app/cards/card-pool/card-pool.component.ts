import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCard } from '../api-card.model';
import { Card } from '../card.model';
import { Cards } from '../cards-model';


@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.scss']
})
export class CardPoolComponent implements OnInit {
  cards: Cards;
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this
      .httpClient
      .get<ApiCard[]>('https://shobu.io/api/cards')
      .subscribe(cards => {
        this.cards = new Cards(
          cards.map(apiCard => new Card(
            apiCard.uid,
            apiCard.name,
            apiCard.civilization,
            apiCard.family,
            apiCard.manaCost,
            apiCard.set,
            apiCard.type
        )));

        console.log("received: " + cards.length + " cards. stored: " + this.cards.length + " cards");
      });
  }

  setSortBy(sortBy: string): void {
    var oldSortBy = this.cards.sortBy;

    if(oldSortBy === sortBy)
    {
      this.cards.sortAscending = !this.cards.sortAscending;
      return;
    }

    this.cards.sortBy = sortBy;
    this.cards.sortAscending = true;
  }
}

// {"uid":"ae56a6c7-b118-44cb-bb6d-c45a9484c598","name":"Mystic Inscription","civilization":"nature","family":"","manaCost":6,"set":"dm-04","type":"Spell"},
// {"uid":"7a94b69e-335c-489a-8c5d-1294a9cb960f","name":"Milieus, the Daystretcher","civilization":"light","family":"Berserker","manaCost":5,"set":"dm-04","type":"Creature"}
// {"uid":"215c4cfb-2a22-4ee1-b4ea-28ac24a1eeee","name":"Ultracide Worm","civilization":"darkness","family":"Parasite Worm","manaCost":6,"set":"dm-02","type":"Creature"}
