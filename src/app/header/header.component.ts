import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
        .subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isTournamentsView = this.router.url.startsWith('/tournaments/view');
            }
        });
    }
}
