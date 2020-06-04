import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/servicio';
  constructor(
    private http: HttpClient
  ) { }
  getServicios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getServicio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteServicio(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveServicio(Servicio: Servicio) {
    return this.http.post(`${this.apiUrl}/create`, Servicio);
  }

  updateServicio(id: string|number, updatedServicio: Servicio): Observable<Servicio> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedServicio);
  }
}
