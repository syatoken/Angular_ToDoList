import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-detail-input',
  templateUrl: './detail-input.component.html',
  styleUrls: ['./detail-input.component.scss']
})
export class DetailInputComponent implements OnInit {
  @Input() list: List;
  @Output() event = new EventEmitter<boolean>();

  taskName: string;
  isUnchanged: boolean;

  constructor() { }

  ngOnInit(): void {
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
      const str = JSON.stringify({id: sessionStorage.length + 1, name: task,
         period: new Date(inputDate), detail: inpuDdetail, deleteFlag: false}
         , function(jsonKey, value) {
           if (this[jsonKey] instanceof Date) {
             return this[jsonKey].toString();
           }
           return value;
         });
      console.log(str);
      let key: string;
      if ((sessionStorage.length + 1) > 9) {
        key = '00' + sessionStorage.length + 1;
      } else if ((sessionStorage.length + 1) < 9) {
        key = '000' + (sessionStorage.length + 1);
      }

      sessionStorage.setItem(key, str);
    }

    // Refresh after adding
    location.reload();
  }

  // Switch the button between disabled and enabled
  buttonStatus(value?: string) {
    console.log(typeof value);
    this.isUnchanged = true;
    if (value !== undefined) {
      if (value.length === 0) {
        this.isUnchanged = false;
      }
    }
  }

  update(updateId: number, updateName: string, date: Date, updateDetail: string) {
    const str = JSON.stringify({id: updateId, name: updateName,
       period: new Date(date), detail: updateDetail, deleteFlag: false}
       , function(jsonKey, value) {
        if (this[jsonKey] instanceof Date) {
          return this[jsonKey].toString();
        }
        return value;
      });
    let key: string;
    if (updateId >= 10) {
      key = '00' + updateId;
    } else {
      key = '000' + updateId;
    }

    sessionStorage[key] = str;

    // Refresh after update
    location.reload();
  }

  cansel() {
    this.event.emit(false);
  }
}

