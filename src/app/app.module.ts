
/// <reference path="../../node_modules/anychart/dist/index.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Reactive Form
// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";


// Auth service
import { AuthService } from "./shared/services/auth.service";
import { MapaComponent } from './mapa/mapa.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserListComponent } from './users-list/users-list.component';
import { GraficoComponent } from './grafico/grafico.component';
import { InformacionPaisesComponent } from './Pag_principal/informacion-paises/informacion-paises.component';
import { InformacionComponent } from './Pag_principal/informacion/informacion.component';
import { PreguntasYrespuestasComponent } from './Pag_principal/preguntas-yrespuestas/preguntas-yrespuestas.component';
import { ContactComponent } from './Pag_principal/contact/contact.component';
import { AboutComponent } from './Pag_principal/about/about.component';
import { ComoProtegerseComponent } from './Pag_principal/como-protegerse/como-protegerse.component';
import { ConsejosPoblacionComponent } from './Pag_principal/consejos-poblacion/consejos-poblacion.component';
import { IndexComponent } from './Pag_principal/index/index.component';
import { PostComponent } from './Pag_principal/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MapaComponent,
    UserListComponent,
    GraficoComponent,
    InformacionPaisesComponent,
    InformacionComponent,
    PreguntasYrespuestasComponent,
    ContactComponent,
    AboutComponent,
    ComoProtegerseComponent,
    ConsejosPoblacionComponent,
    IndexComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
