import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  buttonFlag = false;
  operationFlag = false;
  // lists = LISTS;
  lists: {id: number, name: string, period: Date, detail: string, deleteFlag: boolean}[] = new Array();
  selectedList: List;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    for (let i = 0; i < sessionStorage.length; i++) {
      console.log(sessionStorage.key(i));
      // const obj = JSON.parse(sessionStorage.getItem('000' + String(i + 1)));
      const obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      this.lists[i] = { id: obj.id, name: obj.name, period: obj.period, detail: obj.detail, deleteFlag: obj.deleteFlag};
      console.log(this.lists[i]);
    }
  }

  add(): void {
    this.buttonFlag = true;
    this.selectedList = undefined;
  }

  close(): void {
    this.buttonFlag = false;
  }

  onSelect(list: List): void {
    let oldselected: List;
    oldselected = this.selectedList;
    this.selectedList = list;
    if (oldselected !== this.selectedList) {
      this.operationFlag = false;
    }
    console.log(typeof list.period);
    this.close();
  }

  onDelete(deleteId: number, deleteName: string): void {
    // ダイアログ表示
    const dialogConfig = this.dialog.open(DeleteDialogComponent, {
      width: '50vw',
      height: '30vw',
      data: { id: deleteId, name: deleteName}
    });
  }

  onReceiveEventFromChild(eventData: boolean) {
    this.operationFlag = eventData;
  }
}
