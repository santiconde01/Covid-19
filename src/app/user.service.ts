import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUser(user: User){
    return this.firestore.doc('users/' + user.id).snapshotChanges();
  }


  getUsers() {
    return this.firestore.collection('Users').snapshotChanges();
}

createUser(user: User){
  return this.firestore.collection('users').add(user);
}

updateUser(user: User){
  delete user.id;
  this.firestore.doc('users/' + user.id).update(user);
}

deleteUser(id: string){
  this.firestore.doc('users/' + id).delete();
}
}
