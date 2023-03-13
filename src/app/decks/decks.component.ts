import { Component } from '@angular/core';
import { DecksService } from './decks.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
  providers: [DecksService]
})
export class DecksComponent {
}
