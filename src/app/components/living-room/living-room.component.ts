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

  actual: Number = 20;
  goal: Number = this.actual;

  ngOnInit() {
    this.livingRoomService.get().subscribe(value => {
      this.actual = value;
      this.goal = value;
      console.log("this.actual "+ this.actual);
      console.log("this.goal "+ this.goal);
    });
  }

  save(){
    console.log("this.goal "+ this.goal);
    this.livingRoomService.set(this.goal).subscribe(value => {
      
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
