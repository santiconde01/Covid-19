import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private ordersService:UsuariosService) { }

  ngOnInit(): void {

  this.getUsers();}
      coffeeOrders;   getCoffeeOrders = () =>
          this.ordersService
          .getCoffeeOrders()
          .subscribe(res =>(this.coffeeOrders = res));
  }

}
