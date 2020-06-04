import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoy = new Date();
  numerodia;
  catalogo: any = [];
  reservas: any = [];
  reservasfiltradas: any = [];
  constructor(
    private toast: ToastrService,
    private reservaService: ReservaService,
    private servicioService: ServicioService
  ) { }
  getServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.catalogo = res;
        console.log(this.catalogo);
      },
      err => {
        console.log(err);
      }
    );
  }
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
    let dd: any;
    let mm: any;
    let pinshifecha: string;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    const cadena = yyyy + '-' + mm + '-' + dd;
    pinshifecha = cadena.toString();
    console.log(pinshifecha);
    const a2 = new Date(pinshifecha).getTime();
    console.log(a2);
    this.numerodia = a2;
  }
  ngOnInit(): void {
    this.fechadeldia();
    this.getServicios();
  }
  serviceselected(wasa) {
    console.log(wasa);
    this.reservaService.getHome(wasa).subscribe(
      res => {
        this.reservas = res;
        console.log(this.reservas);
        const array = this.reservas;
        const parametro = this.numerodia;
        const filtro: any = [];
        for (const obj of array) {
          const fecha = obj.FechaReserva;
          const numerofecha = new Date(fecha).getTime();
          console.log(numerofecha);
          if (numerofecha === parametro) {
            console.log('se encontro igualdad');
            filtro.push(obj);
            this.reservasfiltradas = filtro;
          }
        }
        console.log(this.reservasfiltradas);
      },
      err => {
        console.log(err);
      }
    );
  }
}
