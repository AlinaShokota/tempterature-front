import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private http:HttpClient) { }

  set(temperature: number): Observable<Object> {
    return this.http.post('http://localhost:8080/temperature/kitchen/set', temperature);
  }

  get(): Observable<Number> {
    return this.http.get<Number>('http://localhost:8080/temperature/kitchen/get');
  }
}
