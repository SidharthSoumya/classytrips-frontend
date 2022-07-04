import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, RouterModule, FooterComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'classytrips';
  images = [
    { source: './../assets/images/bg.jpg' },
    { source: './../assets/images/bg.jpg' },
  ];

  constructor() {}
}
