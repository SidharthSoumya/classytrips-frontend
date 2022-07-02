import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NgbModule]
})
export class AppModule {}
