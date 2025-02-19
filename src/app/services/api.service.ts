import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Item } from '../models/item.model'; // Importa la interfaz

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDestinos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/traveler/destinos`);
  }

  //register
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/traveler/register`, user);
  }

  //login
  loginUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/traveler/login', data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  

  
  
  
}
