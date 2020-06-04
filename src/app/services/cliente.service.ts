import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/cliente';
  constructor(
    private http: HttpClient
  ) { }

  getClientes() {
    return this.http.get(`${this.apiUrl}`);
  }

  getCliente(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getClientecorreo(correo: string) {
    return this.http.get(`${this.apiUrl}/searchcorreo/${correo}`);
  }
  getClientedoc(numero: string) {
    return this.http.get(`${this.apiUrl}/searchdoc/${numero}`);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveCliente(Cliente: Cliente) {
    return this.http.post(`${this.apiUrl}/create`, Cliente);
  }

  updateCliente(id: string|number, updatedCliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedCliente);
  }
}
