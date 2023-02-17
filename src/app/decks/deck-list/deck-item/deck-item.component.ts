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

  isCoverCardFromCivilization(deck, civilization): boolean {
    return deck.coverCardCivilization.toLowerCase() === civilization.toLowerCase();
  }

  isCoverCardFromAnyCivilization(deck)
  {
    return this.isCoverCardFromCivilization(deck, 'fire') ||
      this.isCoverCardFromCivilization(deck, 'water') ||
      this.isCoverCardFromCivilization(deck, 'nature') ||
      this.isCoverCardFromCivilization(deck, 'light') ||
      this.isCoverCardFromCivilization(deck, 'darkness');
  }
}
