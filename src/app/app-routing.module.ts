import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { TodoComponent } from './components/todo/todo/todo.component';
import { TableComponent } from './components/table/table/table.component';
import { UserComponent } from './components/user/user.component';
const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  declarations: [ ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserComponent, TodoComponent, TableComponent];
