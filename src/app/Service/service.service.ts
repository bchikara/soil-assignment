import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private dB: AngularFireDatabase) { }
  
  addTask(value){ 
    console.log(value)
    return this.dB.list('/tasks').push(value)
  }

  updateTask(task,key){
    let items = this.dB.object('/tasks/' + key);
    items.update({ 'name': task.name,'url':task.url,'description':task.description,'date':task.date })
  }

  removeTask(key){
    return this.dB.list('/tasks/' + key).remove();
  }

  compeletedTask(key,value){
    let items = this.dB.object('/tasks/' + key);
    items.update({ 'completed': !value })
  }

  getTasks(){
    return this.dB.object('/tasks').snapshotChanges()
  }

  updateImportant(key,value){
    let items = this.dB.object('/tasks/' + key);
    items.update({ 'important': !value })
  }

  getTask(key){
    return this.dB.object('/tasks/'+key).snapshotChanges()
  }

}
