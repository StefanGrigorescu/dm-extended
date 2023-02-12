import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TournamentState } from '../tournament-state.enum';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  @Input() tournaments: Tournament[];
  @Output() tournamentSelect: EventEmitter<Tournament> = new EventEmitter<Tournament>();
  @Output() openCreateForm: EventEmitter<void> = new EventEmitter<void>();

  toggleCurrentTournaments : boolean = true;

  constructor() {

  }

  ngOnInit() {

  }

  onTournamentSelected(tournament: Tournament): void {
    this.tournamentSelect.emit(tournament);
  }

  onClickedHostButton(): void {
    this.openCreateForm.emit();
  }

  onToggleChange(): void {
    this.toggleCurrentTournaments = !this.toggleCurrentTournaments;
    this.tournamentSelect.emit(null);
  }

  getTournaments(): Tournament[] {
    if(this.toggleCurrentTournaments)
    {
      return this
        .tournaments
        .filter(t => t.status != TournamentState.Archived);
    }
    
    return this
      .tournaments
      .filter(t => t.status === TournamentState.Archived);
  }
}

