import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class NavigusService {
  constructor(private dB: AngularFireDatabase) { }

  getBeers() {
    return this.dB.object('/beers').snapshotChanges()
  }

  updateBeer(key, beer) {
    let items = this.dB.object('/beers/' + key);
    items.update({ 'selected': !beer.selected })
  }

  updateBeer2(key,beer){
    let items = this.dB.object('/beers/' + key);
    items.update({ 'selected': false })
  }

  addFavourite(key, beer) {

    let product = {
      key: key,
      beer: beer
    }
      return this.dB.list('/favourites').push(product)
  }
  
  searchBeers(start, end){
    return this.dB.list('/beers', ref=>ref.orderByChild('title').limitToFirst(10).startAt(start).endAt(end)
    );
  }

  getFavourite() {
    return this.dB.object('/favourites');
  }
  removeFavourite(key, beer) {
    return this.dB.list('/favourites/' + key).remove();
  }
  removeFavourite2(key, beer) {
    if(beer.selected)
    return this.dB.list('/favourites/' + key).remove();
  }
  getFavouriteKey(key) {
    return this.dB.list('/favourites', ref => ref.orderByChild('key').equalTo(key)).snapshotChanges()
  }
}
