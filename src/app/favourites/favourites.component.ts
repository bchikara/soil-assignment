import { Component, OnInit } from '@angular/core';
import { NavigusService } from './../Service/navigus.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  selected: boolean = true;
  keys: string[];
  beers: {};

  constructor(private navigusService: NavigusService) { }

  ngOnInit() {
    this.navigusService.getFavourite().snapshotChanges().subscribe(
      res => {
        if(res.payload.val()){
        console.log(res.payload.val());
        this.keys =[...Object.keys(res.payload.val())]
        this.beers = res.payload.val();}
        else{
          this.keys=[]
        }
      },err=>{
        this.keys=[];
      }
    )
  }

  removeFavourite(key,beer,key$){
    this.navigusService.removeFavourite(key,beer);
    this.navigusService.updateBeer2(key$,beer);
  }

}
