import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  // inejected the dependency
  // http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  // OR THIS IS ALSO USED (when we have no class or constuctor in function)
  // private http = inject(HttpClient)

  // SHORETR WAY TO INJECT
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get(
      'https://api.chucknorris.io/jokes/random?category=dev'
    );
  }


  // GLOBAL STATE MNG. CONCEPT
}
