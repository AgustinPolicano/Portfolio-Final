import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BackArrowComponent } from '../components/back-arrow/back-arrow.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { LoadingComponent } from '../components/loading-component/loading.component';
import { NavbarComponentComponent } from '../components/navbar-component/navbar-component.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { HomeComponent } from './home.component';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from '../components/footer/footer.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [			
    NavbarComponentComponent,
    HomeComponent,
    LoadingComponent,
    BackArrowComponent,
    ProyectosComponent,
    HabilidadesComponent,
    FooterComponent,
    ExperienciaComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
})
export class HomeModule { }
