import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ToDoList';
  alertLists: {name: string, period: Date, deleteFlag: boolean}[] = new Array();

  ngOnInit() {
    let now;
    if (sessionStorage.length > 0) {
      console.log(sessionStorage.length); // storageのデータ数
      let j = 0;

      for (let i = 0; i < sessionStorage.length; i++) {
        const obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (obj.period === null || obj.deleteFlag === true) {
          continue;
        }
        this.alertLists[j] = { name: obj.name, period: obj.period, deleteFlag: obj.deleteFlag};
        j++;
      }
      setInterval(() => {
        now = new Date();
        now = now.toString();
        for (let i = j; i--;) {
          if (this.alertLists[i].period === now) {
            console.log('ok');
            // alert('ok');
          }
        }
      }, 1000);
    }
  }
}
