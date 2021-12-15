import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';


@NgModule({
  declarations: [			
   AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
