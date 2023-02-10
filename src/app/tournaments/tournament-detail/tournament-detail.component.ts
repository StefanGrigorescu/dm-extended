import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from '../tournament.model';
import { TournamentStatus } from '../tournament-status.enum';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {
  @Input() tournament: Tournament;

  // Reference to the enum. Used by the EnumValueToNamePipe
  TournamentStatus = TournamentStatus;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
