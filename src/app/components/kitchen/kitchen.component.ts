import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  actual: number = 20;
  goal: number = this.actual;
  options: Options = {
    floor: 10,
    ceil: 30,
    showSelectionBar: true,
    getSelectionBarColor: (goal: number): string => {
      if (goal <= 15) {
          return 'blue';
      }
      if (goal <= 20) {
          return 'yellow';
      }
      if (goal <= 25) {
          return 'orange';
      }
      return 'red';
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
