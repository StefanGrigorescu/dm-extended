import {Component, EventEmitter, Output} from '@angular/core';
import { RoutesManager } from '../../utils/routes-manager';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;

    routesManager = RoutesManager;

    @Output() navigate = new EventEmitter<string>();

    onNavigate(page: string): void {
        this.navigate.emit(page);
    }
}
