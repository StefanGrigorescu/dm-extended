import { Component, OnInit } from '@angular/core';
import { Cards } from '../cards/cards-model';
import { CardsService } from '../cards/cards.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [CardsService]
})
export class GalleryComponent implements OnInit {
  poolCards: Cards = new Cards([]);

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this
      .cardsService
      .getShobuIoCards()
      .subscribe(cards => {
        this.poolCards = cards;
        console.log("received: " + this.poolCards.length + " cards. stored: " + this.poolCards.length + " cards");
      });
  }
}
