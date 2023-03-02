import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from '../tournament.model';
import { TournamentState } from '../tournament-state.enum';
import { CardsService } from 'src/app/cards/cards.service';
import { Cards } from 'src/app/cards/cards-model';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss'],
  providers: [CardsService]
})
export class TournamentDetailComponent implements OnInit {
  @Input() tournament: Tournament;

  // Reference to the enum. Used by the EnumValueToNamePipe
  TournamentState = TournamentState;

  poolCards: Cards;

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
