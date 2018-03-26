import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import { of as observableOf } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


/*
  Generated class for the PartyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartyProvider {

  rootUrl: string = 'https://jsonplaceholder.typicode.com';

  posts: string = 'posts'

  constructor(public http: Http) {
    console.log('Hello PartyProvider Provider');
  }

  getParty(id: number)/*: Observable<PartyDefine>*/ {
    return this.http.get(`${this.rootUrl}/${this.posts}/${id}`).map(res => res.json()).take(1);
    //return observableOf(Partys.find(party => party.id === id));
  }

}
