import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../Pais/pais';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {


  constructor(private afs: AngularFirestore,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPais("");
  }

  public async getPais(countryCode: string) {
    let pais = await 
    this.afs.collection('countries').doc(countryCode).get().toPromise();
    console.log(pais.data);
    return pais.data();
  }
}
