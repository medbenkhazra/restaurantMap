import {Component} from '@angular/core';

import {ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './app.index.component.html',
    styleUrls: ['../theme/theme-blue.css', '../layout/css/layout-blue.css', 'primeng.min.css', 'primeflex.css']
})

export class AppIndexComponent {
    constructor(private scroller: ViewportScroller, private router: Router) {
    }

    goDown() {
        this.scroller.scrollToAnchor("Home");
    }

    goDown1() {
        this.scroller.scrollToAnchor("NosServices");
    }

    goDown2() {
        this.scroller.scrollToAnchor("Secteursactivite");
    }

    goDown3() {
        this.scroller.scrollToAnchor("pricing");
    }

    goDown4() {
        this.scroller.scrollToAnchor("multimedia");
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }


}
