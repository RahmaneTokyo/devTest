import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { TodoListComponent } from './users/todo-list/todo-list.component';
import {ReservoirComponent} from "./reservoir/reservoir.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: ListUsersComponent,
  },
  { path: 'users/:id/todos', component: TodoListComponent },
  { path: 'reservoir', component: ReservoirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
