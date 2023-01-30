import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit{

  users: any;
  columns = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  getTodo(id: number) {
    this.router.navigate(['/users/' + id + '/todos']);
  }
}
