import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pile',
  templateUrl: './card-pile.component.html',
  styleUrls: ['./card-pile.component.scss']
})
export class CardPileComponent {
  @Input() card;
}
