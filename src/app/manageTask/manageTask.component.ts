import { Component, OnInit } from '@angular/core';
import { NavigusService } from '../Service/navigus.service';
import { ServiceService } from './../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manageTask.component.html',
  styleUrls: ['./manageTask.component.css']
})
export class ManageTaskComponent implements OnInit {

  selected: boolean = true;
  keys: string[];
  tasks: {};

  constructor(private service: ServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getTasks().subscribe(res => {
      this.keys = this.keys = [...Object.keys(res.payload.val())]
      console.log(res.payload.val())
      this.tasks = res.payload.val()
    })
  }

  removeTask(key) {
    this.service.removeTask(key);
  }

  importantTask(key,important){
   this.service.updateImportant(key,important)
  }

  completedTask(key,completed){
    console.log(completed)
    this.service.compeletedTask(key,completed)
   }

  editTask(id){
    this.router.navigate(['editTask/'+id])
  }

}
