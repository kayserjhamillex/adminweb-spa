import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-subproceso1',
  templateUrl: './subproceso1.component.html',
  styleUrls: ['./subproceso1.component.css']
})
export class Subproceso1Component implements OnInit {
  servicio: any = [];
  fecha: Date = new Date();
  fechaActual: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: ServicioService
  ) { }
  getServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.servicio = res;
      },
      err => console.error(err)
    );
  }
  reservar(codigo, fecha) {
    // console.log(codigo);
    // console.log(fecha);
    const numerofecha = new Date(fecha).getTime();
    // console.log(numerofecha);
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso2',
        codigo,
        numerofecha
      ]
    );
  }
  sumarDias(fecha, dia) {
    fecha.setDate(fecha.getDate() + dia);
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1; // As January is 0.
    const yyyy = fecha.getFullYear();
    let returnDate = '';
    returnDate += yyyy;
    if (mm < 10) {
      returnDate += `-0${mm}`;
      } else {
      returnDate += `-${mm}`;
      }

    if (dd < 10) {
    returnDate += `-0${dd}`;
    } else {
    returnDate += `-${dd}`;
    }
    return returnDate;
  }
  getNowDate() {
    const fecha = new Date();
    const today = new Date();
    // return returnDate;
    const d = new Date(today);
    // this.sumarDias(returnDate)
    return this.sumarDias(d, 1);
  }
  ngOnInit(): void {
    this.fechaActual = this.getNowDate();
    this.getServicios();
  }

}
