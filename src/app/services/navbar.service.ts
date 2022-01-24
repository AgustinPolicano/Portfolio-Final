import { ElementRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  open: any;
  locations = new Observable();
  isOpen: boolean = false;
constructor() { }

  handleOpen(){
    if(!this.isOpen) {
         this.isOpen = true;
    } else {
      this.isOpen = false;
    }
}

}

