import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentState } from '../tournament-state.enum';
import { Tournament } from '../tournament.model';
import { TournamentsService } from '../tournaments.service'

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent {
  Object = Object;
  tournamentForm: FormGroup;
  
  tournament: Tournament = this.newTournament();

  constructor(
    private formBuilder: FormBuilder,
    private tournamentsService: TournamentsService,
    private router: Router
    ) {
    this.tournamentForm = this.formBuilder.group({
      name: ['', Validators.required],
      shortDescription: [''],
      description: [''],
      initialPoolLowerSize: [0, Validators.required],
      initialPoolUpperSize: [0, Validators.required],
      initialPoolMaxResetTimes: [0],
      deckMaxSize: [0, Validators.required],
      allowedSets: [''],
      onlyMonoDecks: [false],
      sharedPool: [false],
      fixedDecks: [false],
      draft: [false],
      draftPickCount: [0],
      draftPickDropped: [0],
      defineTiers: [true],
      cardsInPoolOfTier: [''],
      maxCardCopiesOfTier: [''],
      registerStartTime: [''],
      registerEndTime: [''],
      activeStartTime: [''],
      activeEndTime: [''],
      winnerId: [''],
      winnerName: [''],
      tournamentId: [0],
      hostId: [''],
      hostName: [''],
      createdOn: [''],
      status: [''],
      canceledOn: [''],
      cancelReason: [''],
    });
  }

  onSubmit() {
    //this.tournament = this.tournamentForm.value;

    this.tournamentsService.createTournament(this.tournament);
    this.router.navigate(['/tournaments', 'view']);
  }

  onClearForm() {
    this.tournament = this.newTournament();
  }

  private newTournament(): Tournament {
    return new Tournament
    (
      "",
      "",
      "",
      (function(d){ d.setDate(d.getDate()); return d})(new Date),
      (function(d){ d.setDate(d.getDate()); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()); return d})(new Date),
      (function(d){ d.setDate(d.getDate()); return d})(new Date),
      TournamentState.Defined
    )
  }
}
