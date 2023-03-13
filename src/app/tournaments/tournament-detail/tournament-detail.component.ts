import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Tournament } from '../tournament.model';
import { TournamentState } from '../tournament-state.enum';
import { CardsService } from 'src/app/cards/cards.service';
import { Cards } from 'src/app/cards/cards-model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss'],
  providers: [CardsService]
})
export class TournamentDetailComponent implements OnInit, OnDestroy {
  tournament: Tournament;
  poolCards: Cards = new Cards([]);

  // Reference to the enum. Used by the EnumValueToNamePipe
  TournamentState = TournamentState;

  private tournamentSubscription: Subscription;

  constructor(
    private tournamentsService: TournamentsService,
    private cardsService: CardsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        const tournamentId: number = +params['id'];
        this.fetchTournamentById(tournamentId);
      });
  }

  ngOnDestroy(): void {
    this.tournamentSubscription.unsubscribe();
  }

  private fetchTournamentById(tournamentId: number): void {
    if(this.tournamentSubscription) {
      this.tournamentSubscription.unsubscribe();
    }

    this.tournamentSubscription = this.tournamentsService
      .getTournamentById(tournamentId)
      .subscribe(tournament => {
        this.tournament = tournament;

        this.cardsService
          .getShobuIoCards()
          .subscribe(cards => {
            this.poolCards = cards;
            console.log("received: " + this.poolCards.length + " cards. stored: " + this.poolCards.length + " cards");
          });
      });
  }
}
