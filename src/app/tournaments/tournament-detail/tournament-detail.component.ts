import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {
  @Input() tournament: Tournament;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
