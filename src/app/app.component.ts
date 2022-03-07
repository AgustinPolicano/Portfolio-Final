import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticlesConfig } from '../assets/particles-config';
import { ServiceApp } from './services/navbar.service';
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lilocode';
  isHome!: boolean;
  constructor(private service: ServiceApp) {
  }
  public ngOnInit(): void {
    this.service.isInHome();
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }

  changeOfRoutes(){
    this.service.isInHome();
    this.isHome = this.service.isHome
  }
}
