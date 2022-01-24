import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAboutMeComponent } from '../components/dialog-about-me/dialog-about-me.component';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  isOpen!: boolean;
  constructor(public dialog: MatDialog, private service: NavbarService) {
    this.isOpen = this.service.isOpen
  }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(DialogAboutMeComponent)
  }

  changeState(e: any){
    this.isOpen = e
  }
}
