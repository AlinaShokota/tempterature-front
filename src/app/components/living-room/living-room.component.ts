import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { LivingRoomService } from 'src/app/service/living-room.service';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent implements OnInit {
  constructor(private livingRoomService: LivingRoomService, private modalService: ModalService) { }

  // actual: Number = 0;
  // goal: Number = 0;

  actual: Number;
  goal: Number;

  ngOnInit() {
    this.livingRoomService.get().subscribe(value => {
      this.actual = value;
      console.log("actual "+ this.actual);
      this.livingRoomService.getLatestGoal().subscribe(value => {
        this.goal = value;
        console.log("goallll "+ this.goal);
      })
    });
  }

  save(){
    console.log("this.goal "+ this.goal);
    this.livingRoomService.set(this.goal).subscribe(value => {
      console.log("saved temp " + this.goal + " degrees")
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

  options: Options = {
    floor: 0,
    ceil: 40,
    showSelectionBar: true,
    getSelectionBarColor: (goal): string => {
      if (goal <= 10) {
          return 'blue';
      }
      if (goal <= 20) {
          return 'yellow';
      }
      if (goal <= 30) {
          return 'orange';
      }
      return 'red';
    }
  };


}
