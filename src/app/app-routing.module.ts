import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageTaskComponent } from './manageTask/manageTask.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'manageTask',component:ManageTaskComponent},
  {path:'addTask',component:EditTaskComponent},
  {path:'editTask/:id',component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
