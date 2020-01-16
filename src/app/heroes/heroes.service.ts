import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from './hero';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*' 
       })
  };
@Injectable()
export class HeroesService {
  heroesUrl = 'http://localhost:7001/api-tesorero-wl-1.0/api-tesoreros/tesoreria/3';  // URL to web api

  constructor(
    private http: HttpClient) {

  }


  fetchData(): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl)
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/