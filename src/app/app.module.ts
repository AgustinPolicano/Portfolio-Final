import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ServiceApp } from './services/navbar.service';
import { NahuelP2pComponent } from './nahuel-p2p/nahuel-p2p.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [					
   AppComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDividerModule,

  ],
  providers: [ServiceApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
