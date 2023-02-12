import { Component } from '@angular/core';
import { RoutesManager } from '../../utils/routes-manager';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;

    routesManager = RoutesManager;

}
