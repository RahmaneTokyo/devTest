import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.scss']
})
export class ReservoirComponent implements OnInit{

  // disable the button
  disable = false;

  // Cylinder rows
  items = [1, 2, 3, 4, 5];
  // current fill index
  fillIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  // Fill in function
  fillCylinder() {
    // fill the cylinder on every click
    if (this.fillIndex <= this.items.length - 1) {
      this.fillIndex++;
    }
    // disable the button when reach the limit
    if (this.fillIndex === this.items.length) {
      this.disable = true;
    }
  }

}
