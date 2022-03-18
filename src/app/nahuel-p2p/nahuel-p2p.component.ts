import { Component, OnInit } from '@angular/core';
import { ServiceApp } from '../services/navbar.service';

@Component({
  selector: 'app-nahuel-p2p',
  templateUrl: './nahuel-p2p.component.html',
  styleUrls: ['./nahuel-p2p.component.scss']
})
export class NahuelP2pComponent implements OnInit {
  isLoading!: boolean;
  isOpen!: boolean;
  constructor(private service: ServiceApp) { 
    this.isLoading = true
    this.isOpen = this.service.isOpen;
  }

  ngOnInit() {
    this.service.isInHome()
    this.finalizateLoading()

  }

  finalizateLoading() {
    setTimeout(() => {
      this.setLoading()
  }, 200);
  }

  changeState(e: any){
    this.isOpen = e
  }

  setLoading(){
    this.isLoading = false
  }

  toTitle(){
    document.getElementById('title-p2p')?.scrollIntoView({behavior: 'smooth'})
  }
 

}
