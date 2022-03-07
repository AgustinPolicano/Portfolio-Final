import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BackArrowComponent } from '../components/back-arrow/back-arrow.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { LoadingComponent } from '../components/loading-component/loading.component';
import { NavbarComponentComponent } from '../components/navbar-component/navbar-component.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { NahuelP2pComponent } from '../nahuel-p2p/nahuel-p2p.component';
import { HomeComponent } from './home.component';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [			
    NavbarComponentComponent,
    HomeComponent,
    LoadingComponent,
    BackArrowComponent,
    ProyectosComponent,
    NahuelP2pComponent,
    HabilidadesComponent,
    FooterComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [],
})
export class HomeModule { }
