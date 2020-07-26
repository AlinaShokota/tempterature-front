import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivingRoomService {

  constructor(private http:HttpClient) { }

  set(temperature: Number): Observable<Object> {
    console.log("LivingRoomService "+temperature)
    return this.http.post('http://localhost:8080/setTemp/save', temperature);
  }

  get(): Observable<Number> {
    return this.http.get<Number>('http://localhost:8080/data/latest');
  }

}
