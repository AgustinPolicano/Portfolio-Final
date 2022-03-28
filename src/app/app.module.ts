import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ServiceApp } from './services/navbar.service';


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
