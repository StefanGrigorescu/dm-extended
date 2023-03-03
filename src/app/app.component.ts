import { Component } from '@angular/core';
import { TournamentsService } from './tournaments/tournaments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TournamentsService]
})
export class AppComponent {
  title = 'DM Extended';

}
