import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { BedroomService } from 'src/app/service/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  constructor(private bedroomService:BedroomService) { }

  actual: number;
  goal: number = 20;
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

  ngOnInit() {
    this.bedroomService.get().subscribe(value => {
      this.actual = value;
      console.log('actual '+this.actual)
      console.log('goal '+this.goal)
    });

  }

  setGoal() {
    this.bedroomService.set(this.goal)
      .subscribe(value => {
        console.log('set new temp '+this.goal);
        var action = (this.goal > this.actual) ? "Start heating the room " : "Start cooling the room "; 
        alert(action+'from '+this.actual+' to '+this.goal+' degrees.');
        this.ngOnInit();
      });
  }

  



  

}
