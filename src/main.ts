import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadComponent: () =>
      import('./app/layouts/landing-page/landing-page.component').then(
        ({ LandingPageComponent }) => LandingPageComponent
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./app/layouts/our-services/our-services.component').then(
        ({ OurServicesComponent }) => OurServicesComponent
      ),
  },
] as Routes;

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
    ]),
  ],
});
