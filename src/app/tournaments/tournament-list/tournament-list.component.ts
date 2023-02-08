import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  @Input() tournaments: Tournament[];

  toggleCurrentTournaments : boolean = true;

  constructor() {

  }

  ngOnInit() {

  }
}

