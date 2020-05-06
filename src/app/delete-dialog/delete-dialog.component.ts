import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from 'querystring';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

  apply() {
    let key: string;
    if (this.data.id > 9) {
      key = '00' + this.data.id;
    } else if (this.data.id < 9) {
      key = '000' + this.data.id;
    }
    console.log(key);
    console.log(sessionStorage.getItem(key));
    let obj = JSON.parse(sessionStorage.getItem(key));
    obj = JSON.stringify({id: this.data.id, name: obj.name,
      period: obj.period, detail: obj.detail, deleteFlag: true});
    console.log(obj);
    sessionStorage.setItem(key, obj);
    // sessionStorage.removeItem(key);
    this.dialogRef.close();

    // Refresh after delete
    location.reload();
  }

  close() {
    this.dialogRef.close();
  }

}
