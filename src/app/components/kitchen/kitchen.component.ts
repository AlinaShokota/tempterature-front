import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
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
