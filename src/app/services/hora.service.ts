import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hora } from '../models/hora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/hora';
  constructor(
    private http: HttpClient
  ) { }
  getHoras() {
    return this.http.get(`${this.apiUrl}`);
  }

  getHora(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteHora(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveHora( Hora: Hora) {
    return this.http.post(`${this.apiUrl}/create`, Hora);
  }

  updateHora(id: string|number, updatedHora: Hora): Observable<Hora> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedHora);
  }
}
