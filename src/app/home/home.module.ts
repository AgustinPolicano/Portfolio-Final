import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [			
    NavbarComponentComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class HomeModule { }
