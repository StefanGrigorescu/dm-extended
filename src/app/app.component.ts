import { Component } from '@angular/core';
import { RoutesManager } from '../utils/routes-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DM Extended';
  currentPage = RoutesManager.gallery;

  onNavigated(page: string) {
    switch(page)
    {
      case RoutesManager.gallery:
        this.currentPage = RoutesManager.gallery;
        break;
      case RoutesManager.tournaments:
        this.currentPage = RoutesManager.tournaments;
        break;
      default:
        this.currentPage = RoutesManager.decks;
    }
  }
}
