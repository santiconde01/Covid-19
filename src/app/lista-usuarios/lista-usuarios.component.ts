import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private UsuariosService:UsuariosService) { 

    
  }

    ngOnInit() {this.getUsers();}
      user: import("@angular/fire/firestore").DocumentChangeAction<unknown>[];   getUsers = () =>
          this.UsuariosService
          .getUsers()
          .subscribe(res =>(this.user = res));

          markCompleted = data => 
    this.UsuariosService.updateUser(data);

    deleteUser = data => this.UsuariosService.deleteUser(data);


}
