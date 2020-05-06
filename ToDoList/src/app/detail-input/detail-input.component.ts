import { Component, OnInit, Input, Output } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-detail-input',
  templateUrl: './detail-input.component.html',
  styleUrls: ['./detail-input.component.css']
})

export class DetailInputComponent implements OnInit {
  @Input() list: List;

  taskName: string;
  isUnchanged: boolean;

  constructor() { }

  ngOnInit() {
    this.isUnchanged = false;
  }

  insert(task: string, inputDate: Date, inpuDdetail?: string): void {

    // if (('sessionStorage' in window) && (window.sessionStorage !== null)) {
    //   console.log('使える');
    // } else {
    //   console.log('使えない');
    // }

    console.log(inputDate);
    if (task !== null) {
      const str = JSON.stringify({id: sessionStorage.length + 1, name: task, period: new Date(inputDate)});
      console.log(str);

      sessionStorage.setItem(String(sessionStorage.length + 1), str);
    }

    // Refresh after adding
    location.reload();
  }

  // Switch the button between disabled and enabled
  buttonStatus() {
    this.isUnchanged = null;
  }

  update(updateId: number, updateName: string, date: Date) {
    const str = JSON.stringify({id: updateId, name: updateName, period: new Date(date)});

    sessionStorage[updateId] = str;

    // Refresh after update
    location.reload();
  }

}
