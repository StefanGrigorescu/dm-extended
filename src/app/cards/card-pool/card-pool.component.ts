import { Component, Input } from '@angular/core';
import { Cards } from '../cards-model';

@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.scss']
})
export class CardPoolComponent {
  @Input() cards: Cards;

  setSortBy(sortBy: string): void {
    var oldSortBy = this.cards.sortBy;

    if(oldSortBy === sortBy)
    {
      this.cards.sortAscending = !this.cards.sortAscending;
      return;
    }

    this.cards.sortBy = sortBy;
    this.cards.sortAscending = true;
  }
}
