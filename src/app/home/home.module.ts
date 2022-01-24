import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { BackArrowComponent } from '../components/back-arrow/back-arrow.component';
import { LoadingComponent } from '../components/loading-component/loading.component';
import { NavbarComponentComponent } from '../components/navbar-component/navbar-component.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [			
    NavbarComponentComponent,
    HomeComponent,
    LoadingComponent,
    BackArrowComponent
   ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class HomeModule { }
