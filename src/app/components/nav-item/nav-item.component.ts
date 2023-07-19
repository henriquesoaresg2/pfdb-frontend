import { Component, Input } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
    @Input() public url: string = ''
    @Input() public urlLabel: string = ''
    @Input() public iconName: string = ''

    constructor(
        public router: Router,
    ) {}
}
