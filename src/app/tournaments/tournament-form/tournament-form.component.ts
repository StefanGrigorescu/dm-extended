import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentState } from '../tournament-state.enum';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent {
  @Output() formSubmit = new EventEmitter<Tournament>();
  @Output() cancel = new EventEmitter<void>();

  Object = Object;
  tournamentForm: FormGroup;
  
  tournament: Tournament = new Tournament
    (
      "Mock Defined State Tournament",
      "first short text only",
      "Some descriptive text",
      (function(d){ d.setDate(d.getDate()+4); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+12); return d})(new Date),       
      (function(d){ d.setDate(d.getDate()+19); return d})(new Date),
      (function(d){ d.setDate(d.getDate()+25); return d})(new Date),
      TournamentState.Defined
    );

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

  onSubmit() {
    //this.tournament = this.tournamentForm.value;
    console.log(this.tournament);

    this.formSubmit.emit(this.tournament);
  }

  onClearForm() {
    
  }

  onCancel() {
    this.cancel.emit();
  }
}
