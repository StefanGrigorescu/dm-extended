import { Component, Input } from '@angular/core';
import { Card } from 'src/app/cards/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss', '../../deck-list/deck-list.component.scss']
})
export class CardItemComponent {
  @Input() card: Card;

  getManaCostImg() {
    
  }
}
