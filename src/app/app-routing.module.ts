import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


import {AppIndexComponent} from "../assets/pages/app.index.component";
import {GoogleMapComponent} from "./view/google-map/google-map.component";
import {AppMainComponent} from "./app.main.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [

                    {path: 'map', component: GoogleMapComponent},


                ]
            },

            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
