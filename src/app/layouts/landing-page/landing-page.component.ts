import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openSocial = (type: string) => {
    if (type === 'fb') window.open('https://www.facebook.com/ClassyTripsin-101760119105202');
    if (type === 'ig') window.open('https://www.instagram.com/classytrips.in/');
  }

}
