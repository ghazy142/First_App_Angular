import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PORTFOLIOComponent {
  images: string[] = [
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
  ];

  imageSrc: string = './assets/imgs/port2.png';
  imageSrc2: string = './assets/imgs/poert1.png';
  imageSrc3: string = './assets/imgs/port3.png';

  statuse: Boolean = false;
  // open(e: any): void {
  //   this.statuse = true;
  //   let result = e.target;
  //   console.log(result);

  //   // console.log(e.offsetX);
  // }
  close(): void {
    this.statuse = false;
    console.log('close!');
  }
}
