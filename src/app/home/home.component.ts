import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NavigusService } from '../Service/navigus.service';
import { ServiceService } from '../Service/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keySubscription: Subscription
  filteredStates;

  tasks;
  keys = [];
  keysCopy;
  keys1;

  constructor(public service: ServiceService) {
  }

  ngOnInit() {
    this.service.getTasks().subscribe(res => {
      this.keys1 = this.keys = [...Object.keys(res.payload.val())]
      console.log(res.payload.val())
      this.tasks = res.payload.val()
    })
  }

  sortByImportant() {
    this.keys.sort((a, b) => {
      if (this.tasks[a].important===false) { return 1; }
      if (this.tasks[a].important===true) { return -1; }
      return 0;
    })
  }

  sortByName() {
    this.keys.sort((a, b) => {
      if (this.tasks[a].name < this.tasks[b].name) { return -1; }
      if (this.tasks[a].name > this.tasks[b].name) { return 1; }
      return 0;
    })
  }

  sortByCompleted() {
    this.keys.sort((a, b) => {
      if (this.tasks[a].completed===false) { return 1; }
      if (this.tasks[a].completed===true) { return -1; }
      return 0;
    })
  }

  sortByDate() {
    this.keys.sort((a, b) => {
      if (this.tasks[a].date < this.tasks[b].date) { return -1; }
      if (this.tasks[a].date > this.tasks[b].date) { return 1; }
      return 0;
    })
  }






}
