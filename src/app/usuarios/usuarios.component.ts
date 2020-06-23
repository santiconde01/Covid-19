import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {

  users = ["santiconde01", "joacoTabor", "chinoMingote"]; 

  users2 = [];addUser = user => this.users2.push(user);removeUser = user => {
    let index = this.users2.indexOf(user);
    if (index > -1) this.users2.splice(index, 1);
};

  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
  }

}
