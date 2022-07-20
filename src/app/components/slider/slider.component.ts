import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  imageSlider: Array<object> = [
    {
      id: 1,
      image: '../../../assets/images/slider1.png',
    },
    {
      id: 2,
      image: 'assets/images/slider/slider-2.jpg',
    },
    {
      id: 3,
      image: 'assets/images/slider/slider-3.jpg',
    },
    {
      id: 3,
      image: 'assets/images/slider/slider-3.jpg',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
