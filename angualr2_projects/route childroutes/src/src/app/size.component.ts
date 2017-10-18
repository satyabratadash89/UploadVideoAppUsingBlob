import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    template:  `
        <div class="padded light-blue">
            <p>
                <a [routerLink]="['/size/small']" routerLinkActive="disabled">Small</a> | 
                <a [routerLink]="['/size/medium']" routerLinkActive="disabled">Medium</a> |
                <a [routerLink]="['/size/large']" routerLinkActive="disabled">Large</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: [`
        .light-blue {background-color: #ceebfd;}
        .darker-blue {background-color: #b6e1fc;}`
    ],
    encapsulation: ViewEncapsulation.None
})
export class SizeComponent {}
