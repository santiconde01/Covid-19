import { Component, OnInit } from '@angular/core';import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as User
        }
      })
    });
  }

  create(user: User){
      this.userService.createUser(user);
  }

  update(user: User) {
    this.userService.updateUser(user);
  }

  delete(nombreUsuario: string) {
    this.userService.deleteUser(nombreUsuario);
  }
}