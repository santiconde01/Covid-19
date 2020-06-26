import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('Users').snapshotChanges();
}

createUser(user: User){
  return this.firestore.collection('Users').add(user);
}

updateUser(user: User){
  delete user.nombreUsuario;
  this.firestore.doc('users/' + user.nombreUsuario).update(user);
}

deleteUser(id: string){
  this.firestore.doc('Users/' + id).delete();
}
}
