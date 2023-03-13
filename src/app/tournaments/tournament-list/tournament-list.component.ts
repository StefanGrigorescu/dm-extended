import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Tournament } from '../tournament.model';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  tournaments: Tournament[];
  archived: boolean = false;

  constructor(
    private tournamentsService: TournamentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.archived = params['archived'] === 'true';

        this.tournaments = this.tournamentsService
          .getTournaments(this.archived);
      });

    this.router
      .events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        this.archived = queryParams['archived'] === 'true';
      });
  }

  onToggleChange(): void {
    const queryParams = { archived: String(!this.archived) };

    this.router.navigate(['/tournaments'], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
