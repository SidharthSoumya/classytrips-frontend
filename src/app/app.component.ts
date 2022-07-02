import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent, LandingPageComponent, ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'classytrips';
  images = [
    { source: './../assets/images/bg.jpg' },
    { source: './../assets/images/bg.jpg' },
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {}
}
