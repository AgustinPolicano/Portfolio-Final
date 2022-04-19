import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceApp {
  open: any;
  locations = new Observable();
  isOpen: boolean = false;
  isHome: boolean = false;
  isLoading: boolean = true;
  constructor(private router: Router) {}

  handleOpen() {
    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  handleLoading() {
    if (this.isLoading) {
      this.isLoading = false;
    } else {
      this.isLoading = false;
    }
  }

  loadingHandler() {
    setTimeout(() => {
      this.handleLoading();
    }, 5000);
  }

  isInHome() {
    if (this.router.url === '/home') {
      this.isHome = true;
    } else {
      this.isHome = false;
    }
  }
}
