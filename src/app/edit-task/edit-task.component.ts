import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../Service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute) { }
  date;
  name;
  description;
  url;
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') 
    if(this.id){
     console.log();
     this.service.getTask(this.id).subscribe(res=>{
       console.log(res.payload.val())
       this.name=res.payload.val()['name']
       this.url=res.payload.val()['url']
       this.description=res.payload.val()['description']
       this.date=res.payload.val()['date']
     })
    }
  }

  submit(value){
    let task={
      name:this.name,
      date:new Date(this.date).getTime(),
      description:this.description,
      url:this.url,
      important:false,
      completed:false
    }
    console.log(task)
    this.router.navigate(['manageTask'])
    if(this.id)
    this.service.updateTask(task,this.id);
    else
    this.service.addTask(task);
  }




}
