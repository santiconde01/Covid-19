import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userInfo } from 'os';
import { Comentario } from 'src/app/Comentario';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {

  mensajeForm = new FormGroup({
    mensaje: new FormControl('', [
      Validators.required,
    ]),
  });

  public usuario;


  public comentarios: Comentario[] = []
  constructor(private firestoreSvc: FirestoreService, private user: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.user.saveUser();
    this.usuario = JSON.parse(localStorage.getItem('user'));
    console.log(this.usuario);
    await this.getComentarios();
  }

  async agregarComentario(){
    
    const { mensaje } = this.mensajeForm.value;
     let comentario: Comentario = {
      mensaje: mensaje,
      email: this.usuario.email,
      idUsuario: this.usuario.uid,
      nombreUsuario: this.usuario.displayName,
      fechaDePublicacion: Date.now(),
    } 
   
    let id = await this.firestoreSvc.agregarComentario(comentario);
     comentario["id"] = id;
    this.comentarios.push(comentario);
    console.log(comentario);
  }

  async getComentarios(){
    let query = await this.firestoreSvc.getComentarios();
    query.forEach((comentarioAux) => {
      let aux: any = comentarioAux.data();
      let comentario: Comentario = {
        mensaje: aux.mensaje,
        email: aux.email,
        idUsuario: aux.idUsuario,
        nombreUsuario: aux.nombreUsuario,
        fechaDePublicacion: aux.fechaDePublicacion,
        id: aux.id,
        
      }
      this.comentarios.push(comentario);
      console.log(comentario)
    })
  }

  borrarComentario(comentario: Comentario){
    console.log(comentario);
    this.firestoreSvc.borrarComentario(comentario);
    let indice = this.comentarios.indexOf(comentario);
    this.comentarios.splice(indice);
  }

  getFecha(fecha: number){
    return new Date(fecha);
  }

  
}