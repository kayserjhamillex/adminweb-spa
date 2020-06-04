import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Masajista } from '../models/masajista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasajistaService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/masajista';
  constructor(
    private http: HttpClient
  ) { }
  getMasajistas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getMasajista(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteMasajista(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveMasajista( Masajista: Masajista) {
    return this.http.post(`${this.apiUrl}/create`, Masajista);
  }

  updateMasajista(id: string|number, updatedMasajista: Masajista): Observable<Masajista> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedMasajista);
  }
}
