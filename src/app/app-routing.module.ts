import { OurServicesComponent } from './layouts/our-services/our-services.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch:'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'services', component: OurServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
