import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSmoothScroll } from '@eunsatio/ngx-smooth-scroll';
import { DialogAboutMeComponent } from '../components/dialog-about-me/dialog-about-me.component';
import { ServiceApp } from '../services/navbar.service';
import { ParticlesConfig } from '../../assets/particles-config';
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading!: boolean;
  isOpen!: boolean;
  idHandleado!: any
  constructor(public dialog: MatDialog, private service: ServiceApp) {
    this.isOpen = this.service.isOpen;
  }

  ngOnInit() {
    this.invokeParticles();
    this.isLoading = false
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }


 setLoading(){
 }

  openDialog(){
    this.dialog.open(DialogAboutMeComponent)
  }

  changeState(e: any){
    this.isOpen = e
  }

  toProyects(){
    this.idHandleado = document.getElementById('proyectos')?.scrollIntoView({behavior: 'smooth'})
  }
}
