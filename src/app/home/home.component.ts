import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSmoothScroll } from '@eunsatio/ngx-smooth-scroll';
import { DialogAboutMeComponent } from '../components/dialog-about-me/dialog-about-me.component';
import { ServiceApp } from '../services/navbar.service';
import { ParticlesConfig } from '../../assets/particles-config';
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading!: boolean;
  isOpen!: boolean;
  @ViewChild('proyectos') proyectos!: ElementRef;
  idHandleado!: any;
  constructor(public dialog: MatDialog, private service: ServiceApp) {
    this.isOpen = this.service.isOpen;
  }

  ngOnInit() {
    this.invokeParticles();
    this.isLoading = false;
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }

  setLoading() {}

  openDialog() {
    this.dialog.open(DialogAboutMeComponent);
  }

  changeState(e: any) {
    this.isOpen = e;
  }

  menuLogic() {
    this.service.handleOpen();
    this.isOpen = this.service.isOpen;
  }

  toProyects() {
    document
      .getElementById('proyectos')
      ?.scrollIntoView({ behavior: 'smooth' });
    console.log(this.proyectos.nativeElement);
  }

  scrollProyectos() {
    this.service.handleOpen();
    this.isOpen = this.service.isOpen;
    setTimeout(() => {
      document
        .getElementById('proyectos')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 1);
  }

  scrollHabilidades() {
    this.service.handleOpen();
    this.isOpen = this.service.isOpen;
    setTimeout(() => {
      document
        .getElementById('habilidades')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 1);
  }

  scrollExperiencia() {
    this.service.handleOpen();
    this.isOpen = this.service.isOpen;
    setTimeout(() => {
      document
        .getElementById('experiencia')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 1);
  }

  openDialogNavbar() {
    this.service.handleOpen();
    this.isOpen = this.service.isOpen;
    this.dialog.open(DialogAboutMeComponent);
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Agustin Policano CV.pdf');
    link.setAttribute('download', `Agustin Policano CV.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}
