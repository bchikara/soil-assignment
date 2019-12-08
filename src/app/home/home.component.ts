import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NavigusService } from './../Service/navigus.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keySubscription: Subscription
  selected = false
  stateCtrl = new FormControl();
  filteredStates;
 
  startAt = new Subject()
  endAt = new Subject()
 
  beers: any;
  keys: string[];
  keysCopy;
  keys1: any;
  constructor(public navigusService: NavigusService) {
  }

 filter(query){
  let q = query.toLowerCase();
    this.keys = this.keysCopy;
    console.log(q)
    this.keys = (query) ?
      this.keys.filter(p =>  this.beers[p].title.toLowerCase().includes(q)) : this.keysCopy;
  
 }

 search(query){
  let q = query.toLowerCase();
  this.keys1 = this.keysCopy;
  console.log(q)
  this.keys1 = (query) ?
    this.keys1.filter(p =>  this.beers[p].title.toLowerCase().includes(q)) : this.keysCopy;
 
 }

  ngOnInit() {
    this.navigusService.getBeers().subscribe(res => {
      console.log(res.payload.val());
      this.keys = this.keysCopy= Object.keys(res.payload.val())
      this.beers = res.payload.val();
    })
  }

  addFavourite(key, beer) {
    console.log('add')
    this.navigusService.addFavourite(key, beer);
    this.navigusService.updateBeer(key, beer);
  }

  removeFavourite(key, beer) {
    console.log('remove')
    if (beer.selected) {
      this.keySubscription = this.navigusService.getFavouriteKey(key).subscribe(res => {
        console.log(res[0].payload.key)
        this.navigusService.removeFavourite2(res[0].payload.key, beer);
      })
    }
    this.navigusService.updateBeer(key, beer);
  }



}
