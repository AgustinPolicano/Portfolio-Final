import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  isBanhaia : boolean = true
  isAccusys: boolean = false
  isSeenka: boolean = false
  constructor() { }

  ngOnInit() {
  }

  setBanhaia(){
    if(!this.isBanhaia){
      this.isBanhaia = true
      this.isAccusys = false
      this.isSeenka = false
    } 
  }
  
  setAccusys(){
    if(!this.isAccusys){
      this.isAccusys = true
      this.isBanhaia = false
      this.isSeenka = false
    } 
  }

  setSeenka(){
    if(!this.isSeenka){
      this.isAccusys = false
      this.isBanhaia = false
      this.isSeenka = true
    } 
  }
}
