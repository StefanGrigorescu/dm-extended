import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent {
  @Output() tournamentCreated = new EventEmitter<Tournament>();

  tournamentForm: FormGroup;
  
  tournament: Tournament = this.getDefaultTournament();

  constructor(private formBuilder: FormBuilder) {
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

  onDefineTournament() {
    this.tournament = this.tournamentForm.value;
    console.log(this.tournament);

    this.tournamentCreated.emit(this.tournament);
    this.tournament = this.getDefaultTournament();
  }

  onClearForm() {
    
  }

  onCancel() {
    
  }

  private getDefaultTournament(): Tournament
  {
    return new Tournament
    (
      "Mock Defined State Tournament",
      "first short text only",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()+4); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+12); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()+19); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+25); return d})(new Date),
    );
  }
}
