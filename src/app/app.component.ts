import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'classytrips';
  images = [
    { source: './../assets/images/bg.jpg' },
    { source: './../assets/images/bg.jpg' },
  ];

  constructor(config: NgbCarouselConfig, private httpClient: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpClient.get('https://soumyasidharth.pythonanywhere.com/name').subscribe((res: any) => {
      console.log(res);
    })
  }
}
