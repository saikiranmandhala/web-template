import { Component, Input, OnInit, EventEmitter, ViewChild, trigger, state, transition, style, animate, Inject, forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from '../app.component';


@Component({
    moduleId: module.id,
    selector: 'app-menu',
    //templateUrl: './app-menu.component.html',
    template: `
    <ul class="ultima-menu ultima-main-menu clearfix">
        <app-submenu [item]="model" root="true" class="ultima-menu clearfix"></app-submenu>
    </ul>
    `,
    styleUrls: ['./app-menu.component.css']
})


// @Component({
//     selector: 'app-menu',
//     template: `
//         <ul app-submenu [item]="model" root="true" class="ultima-menu clearfix" [reset]="reset"></ul>
//     `
// })
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: MenuItem[];

    name: string;

    constructor( @Inject(forwardRef(() => AppComponent)) public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
            {
                label: 'Intake & LogCase', icon: 'list',
                items: [
                    { label: 'Log Case', icon: 'desktop_mac', routerLink: ['/forms'] },
                    { label: 'Log Case CC', icon: 'input', routerLink: ['/forms'] }
                ]
            },
            { label: 'Utils', icon: 'build', routerLink: ['/utils'] },
            { label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation'] },
            {
                label: 'Template Pages', icon: 'get_app',
                items: [
                    { label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty'] },
                    { label: 'Landing Page', icon: 'flight_land', url: 'landing.html' },
                    { label: 'Login Page', icon: 'verified_user', url: 'login.html' },
                    { label: 'Error Page', icon: 'error', url: 'error.html' },
                    { label: '404 Page', icon: 'error_outline', url: '404.html' },
                    { label: 'Access Denied Page', icon: 'security', url: 'access.html' }
                ]
            }
        ];
    }
}