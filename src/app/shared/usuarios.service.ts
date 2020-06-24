import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({        
    username: new FormControl(''),
    passsword: new FormControl(''),
    })

    createUser(data) {
      return new Promise<any>((resolve, reject) =>{
          this.firestore
              .collection("Users")
              .add(data)
              .then(res => {}, err => reject(err));
      });
  }

  updateUser(data) {
    return
        this.firestore
        .collection("Users")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }

  getUsers() { 
    return this.firestore.collection("Users").snapshotChanges();
  }

  deleteUser(data) {
    return
        this.firestore
        .collection("Users")
        .doc(data.payload.doc.id)
        .delete();
 }
  
  }
