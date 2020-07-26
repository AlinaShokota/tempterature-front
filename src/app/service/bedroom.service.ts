import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BedroomService {

  constructor(private http:HttpClient) { }

  set(temperature: number): Observable<Object> {
    return this.http.post('http://localhost:8080/temperature/bedroom/set', temperature);
  }

  get(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/temperature/bedroom/get');
  }
}
