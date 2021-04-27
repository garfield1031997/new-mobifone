import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesLink } from 'src/app/consts/routes';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, DoCheck {
    listRoute = RoutesLink;
    showSubMenu = false;
    check: string;
    constructor(
        public router: Router
    ) { }
    ngDoCheck(): void {
        this.listRoute.forEach(x => {
            const check = window.location.href.split('/');
            if (check.includes(x.check)){
                x.show = true;
            }
            else{
                x.show = false;
            }
        });       
    }
    ngOnInit() {

    }
    settingShow() {
        this.showSubMenu = !this.showSubMenu;
    }
    hiddenSetting() {
        this.showSubMenu = false;
    }
}
