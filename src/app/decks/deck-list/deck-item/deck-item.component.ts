import { Component, Input } from '@angular/core';
import { Deck } from '../../deck.model';
import { DecksService } from '../../decks.service';

@Component({
  selector: 'app-deck-item',
  templateUrl: './deck-item.component.html',
  styleUrls: ['./deck-item.component.scss']
})
export class DeckItemComponent {
  @Input() deck: Deck;

  constructor(private decksService: DecksService) {
    
  }

  onSelect()
  {
    this.decksService.deckSelected.emit(this.deck);
  }

  isCoverCardFromCivilization(civilization): boolean {
    return this.deck.coverCardCivilization.toLowerCase() === civilization.toLowerCase();
  }

  isCoverCardFromAnyCivilization() {
    return this.isCoverCardFromCivilization('fire') ||
      this.isCoverCardFromCivilization('water') ||
      this.isCoverCardFromCivilization('nature') ||
      this.isCoverCardFromCivilization('light') ||
      this.isCoverCardFromCivilization('darkness');
  }
}
