import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservita } from '../models/reservita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/reserva';
  apiUrldominio = 'https://obscure-island-00733.herokuapp.com/spa';
  constructor(
    private http: HttpClient
  ) { }

  getReservas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getReserva(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfiltroreservas(masajista: string) {
    return this.http.get(`${this.apiUrl}/filtro/${masajista}`);
  }

  getHome(codigoworker: string) {
    return this.http.get(`${this.apiUrl}/search/home/${codigoworker}`);
  }

  GetReservationSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/gmailreserva/${codigo}`);
  }

  GetPostponementSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/gmailpostergar/${codigo}`);
  }

  deleteReserva(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveReserva( Reserva: Reservita) {
    return this.http.post(`${this.apiUrl}/create`, Reserva);
  }

  updateReserva(id: string|number, updatedReserva: Reservita): Observable<Reservita> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedReserva);
  }
}
