import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);

    this.userService.getTodoList(parseFloat(id)).subscribe(
      (data: any) => {
        this.todos = data;
        console.log(this.todos);
      }
    );
  }

}
