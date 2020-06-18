import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListTestimonio } from '../models/listtest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/testimonio';
  constructor(
    private http: HttpClient
  ) { }
  getTestimonios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getTestimonio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteTestimonio(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveTestimonio( testimonio: ListTestimonio) {
    return this.http.post(`${this.apiUrl}/create`, testimonio);
  }

  updateTestimonio(id: string|number, updatedTestimonio: ListTestimonio): Observable<ListTestimonio> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedTestimonio);
  }
}
