import { Component, OnInit } from '@angular/core';
import { ServiceApp } from '../services/navbar.service';

@Component({
  selector: 'app-nahuel-p2p',
  templateUrl: './nahuel-p2p.component.html',
  styleUrls: ['./nahuel-p2p.component.scss']
})
export class NahuelP2pComponent implements OnInit {
  isLoading!: boolean;
  constructor(private service: ServiceApp) { 
    this.isLoading = true
  }

  ngOnInit() {
    this.service.isInHome()
    console.log(this.isLoading)
    this.finalizateLoading()

  }

  finalizateLoading() {
    setTimeout(() => {
      this.setLoading()
  }, 5500);
  }

  setLoading(){
    this.isLoading = false
  }
 

}
