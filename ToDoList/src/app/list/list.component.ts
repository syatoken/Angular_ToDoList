import { Component, OnInit } from '@angular/core';
import { LISTS } from '../mock-list';
import { List } from '../list';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  buttonFlag = false;
  // lists = LISTS;
  lists: {id: number, name: string, period: Date}[] = new Array();
  selectedList: List;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < sessionStorage.length; i++) {
      console.log(sessionStorage.getItem(String(i + 1)));
      // JSON.parse(sessionStorage.getItem(String(i + 1)));
      const obj = JSON.parse(sessionStorage.getItem(String(i + 1)));
      this.lists[i] = { id: obj.id, name: obj.name, period: obj.period};
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
    this.selectedList = list;
    console.log(typeof list.period);
    this.close();
  }

}
