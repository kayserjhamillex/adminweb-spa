import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/report';
  constructor(private http: HttpClient) { }
  // reporte numero 1
  getworker(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reporte1/${fecha1}/${fecha2}`);
  }
  // reporte numero 2
  getcustomer(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reporte2/${fecha1}/${fecha2}`);
  }

  // los demas reportes ...
}
