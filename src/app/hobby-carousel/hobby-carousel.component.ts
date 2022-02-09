import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel'; // -------- important

@Component({
  selector: 'app-hobby-carousel',
  templateUrl: './hobby-carousel.component.html',
  styleUrls: ['./hobby-carousel.component.scss']
})
export class HobbyCarouselComponent {
  liczba: number = 6000;
  slides = [
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}
  ];


}
