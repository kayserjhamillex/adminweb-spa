import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-subproceso2de2',
  templateUrl: './subproceso2de2.component.html',
  styleUrls: ['./subproceso2de2.component.css']
})
export class Subproceso2de2Component implements OnInit {
  servios: any = [];
  masajistas: any = [];
  reserva: Reserva = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0,
    admin: {
      id: 0,
      Fullname: '',
      Correo: '',
    },
    cliente: {
      id: 0,
      Fullname: '',
      Numerodocumento: '',
      Email: '',
    },
    servicio: {
      id: 0,
      Name: '',
      Resumen: '',
      Monto: ''
    },
    horario: {
      id: 0,
      Dia: '',
      MasajistaId: 0,
      HoraId: 0,
      hora: {
        id: 0,
        Horainicio: '',
        Horafin: '',
      },
      masajista: {
        id: 0,
        Fullname: '',
        Genero: '',
        Celular: '',
        Email: '',
        ImagenMasajista: '',
      },
    }
  };
  parametro = {
    codigoreserva: 0,
    fecha: 0,
    codigoservicio: 0,
    codigomasajista: 0
  };
  ticket: any = this.reserva;
  codigoservicio;
  codigomasajista;
  codigoreserva;
  fecha;
  igual = true;
  cambio = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
    private servicioService: ServicioService,
    private masajistaService: MasajistaService,
  ) { }
  mismo() {
    const parametro1 = this.parametro.codigoreserva;
    const parametro2 = this.parametro.fecha;
    const parametro3 = this.parametro.codigoservicio;
    const parametro4 = this.parametro.codigomasajista;
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso2',
        'subproceso3',
        parametro1,
        parametro2,
        parametro3,
        parametro4
      ]
    );
  }
  cambios() {
    const parametro1 = this.parametro.codigoreserva;
    const parametro2 = this.parametro.fecha;
    const parametro3 = this.parametro.codigoservicio;
    const parametro4 = this.parametro.codigomasajista;
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso2',
        'subproceso3',
        parametro1,
        parametro2,
        parametro3,
        parametro4
      ]
    );
  }
  getTrabajadores() {
    this.masajistaService.getMasajistas().subscribe(
      res => {
        this.masajistas = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  getServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.servios = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.getServicios();
    this.getTrabajadores();
    // tslint:disable-next-line: radix
    const codigoreserva = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.codigoreserva = codigoreserva;
    this.parametro.codigoreserva = this.codigoreserva;
    this.fecha = fecha;
    this.parametro.fecha = this.fecha;
    const codigo = codigoreserva.toString();
    this.reservaService.getReserva(codigo).subscribe(
      res => {
        this.ticket = res;
        this.codigoservicio = this.ticket.ServicioSId;
        this.parametro.codigoservicio = this.codigoservicio;
        this.codigomasajista = this.ticket.horario.MasajistaId;
        this.parametro.codigomasajista = this.codigomasajista;
      },
      err => {
        console.log(err);
      }
    );
  }
  updatemasajista(codigo) {
    this.codigomasajista = codigo;
    this.parametro.codigomasajista = this.codigomasajista;
    this.igual = false;
    this.cambio = true;
  }
  updateservicio(codigo) {
    this.codigoservicio = codigo;
    this.parametro.codigoservicio = this.codigoservicio;
    this.igual = false;
    this.cambio = true;
  }
}
