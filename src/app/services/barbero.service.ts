import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Barbero } from '../models/barbero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarberoService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/barber/barbero';
  constructor(
    private http: HttpClient
  ) { }
  getBarberos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getBarbero(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteBarbero(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveBarbero( Barbero: Barbero) {
    return this.http.post(`${this.apiUrl}/create`, Barbero);
  }

  updateBarbero(id: string|number, updatedBarbero: Barbero): Observable<Barbero> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedBarbero);
  }
}
