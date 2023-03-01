import { Component, Input } from '@angular/core';
import { Card } from 'src/app/cards/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss', '../../deck-list/deck-list.component.scss']
})
export class CardItemComponent {
  @Input() card: Card;

  isCardFromCivilization(civilization): boolean {
    return this.card.civilization.toLowerCase() === civilization.toLowerCase();
  }
  
  isCardFromAnyCivilization() {
    return this.isCardFromCivilization('fire') ||
      this.isCardFromCivilization('water') ||
      this.isCardFromCivilization('nature') ||
      this.isCardFromCivilization('light') ||
      this.isCardFromCivilization('darkness');
  }

  getManaCostImg() {
    
  }
}
