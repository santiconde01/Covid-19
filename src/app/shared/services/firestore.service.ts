import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Comentario } from 'src/app/Comentario';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  async agregarComentario(mensaje: Comentario) :Promise<string>{
    let id = this.angularFirestore.createId();
    await this.angularFirestore.collection('Mensajes').doc(id).set({
      mensaje: mensaje.mensaje,
      idUsuario: mensaje.idUsuario,
      nombreUsuario: mensaje.nombreUsuario,
      fechaDePublicacion: mensaje.fechaDePublicacion,
      id: id,
    });
    return id;
  }

  async getComentarios() {
    return await this.angularFirestore.collection('Mensajes', ref => ref.orderBy('fechaDePublicacion')).get().toPromise();
  }

  async borrarComentario(mensaje: Comentario, userId?: string) {
    await this.angularFirestore.collection('Mensajes').doc(mensaje.id).delete();
    /* if(mensaje.idUsuario == userId){
      this.angularFirestore.collection('Mensaje').doc(mensaje.id).delete();
    } */
  }
}