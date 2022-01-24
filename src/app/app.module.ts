import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarService } from './services/navbar.service';


@NgModule({
  declarations: [				
   AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
