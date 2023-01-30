import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { TodoListComponent } from './users/todo-list/todo-list.component';
import { ReservoirComponent } from './reservoir/reservoir.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    TodoListComponent,
    ReservoirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
