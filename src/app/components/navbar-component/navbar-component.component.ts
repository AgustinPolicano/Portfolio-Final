import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ServiceApp } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss'],
})
export class NavbarComponentComponent  {
  @Input() isOpen!: boolean;
  @Input() idHandleado!: any;
  @ViewChild('.menu-btn') classBtn: any;
  @Output() navbarState = new EventEmitter();
  constructor(private el: ElementRef, private service: ServiceApp) {
  }

  ngOnInit(): void {
  }

  menuLogic(){
    this.service.handleOpen()
    this.isOpen = this.service.isOpen 
    this.navbarState.emit(this.isOpen)
 ;

  }

  
}
