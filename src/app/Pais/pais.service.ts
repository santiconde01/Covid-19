import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pais } from './pais';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private db: AngularFirestore) { }

  formData: Pais;


  getAllPaises() {
    return this.db.collection('Countries').get().toPromise() // We will use the id in order to perform the update or delete operation.
  }
}
