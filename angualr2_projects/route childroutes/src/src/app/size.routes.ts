import { Routes } from '@angular/router';

import { SizeComponent } from "./size.component";
import { SmallComponent } from "./small.component";
import { MediumComponent } from "./medium.component";
import { LargeComponent } from "./large.component";

export const SizeRoutes: Routes = [
    {
        path: 'size',
        component: SizeComponent,
        children: [
            {path: '', redirectTo: 'medium'},
            {path: 'small', component: SmallComponent},
            {path: 'medium', component: MediumComponent},
            {path: 'large', component: LargeComponent}
        ]
    },
];