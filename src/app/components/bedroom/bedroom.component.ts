import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { BedroomService } from 'src/app/service/bedroom.service';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  // constructor(private bedroomService:BedroomService) { }

  // actual: number;
  // goal: number = 20;
  // options: Options = {
  //   floor: 10,
  //   ceil: 30,
  //   showSelectionBar: true,
  //   getSelectionBarColor: (goal: number): string => {
  //     if (goal <= 15) {
  //         return 'blue';
  //     }
  //     if (goal <= 20) {
  //         return 'yellow';
  //     }
  //     if (goal <= 25) {
  //         return 'orange';
  //     }
  //     return 'red';
  //   }
  // };

  // ngOnInit() {
  //   this.bedroomService.get().subscribe(value => {
  //     this.actual = value;
  //     console.log('actual '+this.actual)
  //     console.log('goal '+this.goal)
  //   });

  // }

  // setGoal() {
  //   this.bedroomService.set(this.goal)
  //     .subscribe(value => {
  //       console.log('set new temp '+this.goal);
  //       var action = (this.goal > this.actual) ? "Start heating the room " : "Start cooling the room "; 
  //       alert(action+'from '+this.actual+' to '+this.goal+' degrees.');
  //       this.ngOnInit();
  //     });
  // }

  constructor(private modalService: ModalService) { }

  // actual: Number = 0;
  // goal: Number = 0;

  actual: Number = 23;
  goal: Number = this.actual;

  ngOnInit() {
    // this.livingRoomService.get().subscribe(value => {
    //   this.actual = value;
    //   this.goal = value;
    //   console.log("this.actual "+ this.actual);
    //   console.log("this.goal "+ this.goal);
    // });
  }

  save(){
    console.log("this.goal "+ this.goal);
    // this.livingRoomService.set(this.goal).subscribe(value => {
      
    // });
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

  options: Options = {
    floor: 0,
    ceil: 30,
    showSelectionBar: true,
    getSelectionBarColor: (goal): string => {
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



  

}
