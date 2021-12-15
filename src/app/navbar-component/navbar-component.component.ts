import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss'],
})
export class NavbarComponentComponent  {
  menuOpen!: boolean;
  @ViewChild('.menu-btn') classBtn: any;
  constructor(private el: ElementRef) {
    this.menuOpen = false;
  }


  menuLogic(){
    const menuBtn = this.el.nativeElement.querySelector('.menu-btn')
    if(!this.menuOpen) {
         this.menuOpen = true;
         console.log("close")
    } else {
      this.menuOpen = false;
      console.log("open")
    }
 
  }
  
}
