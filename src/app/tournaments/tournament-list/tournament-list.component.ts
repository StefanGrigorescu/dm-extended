import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from '../tournament.model';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent  implements OnInit{
  tournaments: Tournament[];

  constructor(
    private tournamentsService: TournamentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        const archivedStr: string = params['archived'];
        const archived: boolean = archivedStr === "false" ? false : true;
        
        this.tournamentsService.tournamentSelected.emit(null);

        this.tournaments = this.tournamentsService
          .getTournaments(archived);
      });
  }

  onToggleChange(): void {
    const oldArchived = this.activatedRoute
      .snapshot
      .queryParams['archived'];

    const archived = oldArchived === 'true' ? 'false' : 'true';

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { archived }
    });
  }
}

