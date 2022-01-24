import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-about-me',
  templateUrl: './dialog-about-me.component.html',
  styleUrls: ['./dialog-about-me.component.scss']
})
export class DialogAboutMeComponent implements OnInit {

  constructor(public dialog: MatDialogRef<DialogAboutMeComponent>) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialog.close()
  }

}
