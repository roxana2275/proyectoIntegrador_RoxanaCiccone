import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HardAndSoftComponent } from './components/hard-and-soft/hard-and-soft.component';
import { HeaderComponent } from './components/header/header.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FotoComponent } from './components/acerca-de/foto/foto.component';
import { ParrafoComponent } from './components/acerca-de/parrafo/parrafo.component';
import { BotonComponent } from './components/header/boton/boton.component';
import { LogoApComponent } from './components/header/logo-ap/logo-ap.component';
import { RedesComponent } from './components/header/redes/redes.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    HardAndSoftComponent,
    HeaderComponent,
    ProyectosComponent,
    FotoComponent,
    ParrafoComponent,
    BotonComponent,
    LogoApComponent,
    RedesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
