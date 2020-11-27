import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) { }

  async saveUser(): Promise<void> {
    this.afAuth.user.subscribe(async (user) => {
      const dataUser = await this.getUser(user.uid);
      localStorage.setItem('user', JSON.stringify(dataUser));
    });
  }

  public async getUser(id: string) {
    //Trae de la collection 'users', el documento con el id que se pasa como argumento
    let user = await this.firestore
      .collection('users')
      .doc(id)
      .get()
      .toPromise();
    return user.data();
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
