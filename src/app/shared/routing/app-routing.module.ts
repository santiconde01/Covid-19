import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

import { AuthGuard } from "../../shared/guard/auth.guard";
import { UserListComponent } from 'src/app/users-list/users-list.component';
import { PostComponent } from 'src/app/Pag_principal/post/post.component';
import { ComoProtegerseComponent } from 'src/app/Pag_principal/como-protegerse/como-protegerse.component';
import { ConsejosPoblacionComponent } from 'src/app/Pag_principal/consejos-poblacion/consejos-poblacion.component';
import { PreguntasYrespuestasComponent } from 'src/app/Pag_principal/preguntas-yrespuestas/preguntas-yrespuestas.component';
import { IndexComponent } from 'src/app/Pag_principal/index/index.component';
import { InformacionPaisesComponent } from 'src/app/Pag_principal/informacion-paises/informacion-paises.component';
import { InformacionComponent } from 'src/app/Pag_principal/informacion/informacion.component';
import { GraficoComponent } from 'src/app/grafico/grafico.component';
import { ForoComponent } from 'src/app/Pag_principal/foro/foro.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'users-list', component: UserListComponent }, 

  { path: 'post', component: PostComponent }, 
  { path: 'como-protegerse', component: ComoProtegerseComponent }, 
  { path: 'consejos-poblacion', component: ConsejosPoblacionComponent }, 
  { path: 'index', component: IndexComponent }, 
  { path: 'informacion', component: InformacionComponent }, 
  { path: 'informacion-paises', component: InformacionPaisesComponent }, 
  { path: 'preguntasyrespuestas', component: PreguntasYrespuestasComponent }, 
  { path: 'grafico/:pais', component: GraficoComponent },
  { path: 'foro', component: ForoComponent,
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
