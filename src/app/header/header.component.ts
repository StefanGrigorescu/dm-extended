import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    collapsed = true;

    isTournamentsView = false;

    constructor(private router: Router) {}
  
    ngOnInit(): void {
      this.router
        .events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
            this.isTournamentsView = this.router.url.startsWith('/tournaments/view');
        });
    }
}
