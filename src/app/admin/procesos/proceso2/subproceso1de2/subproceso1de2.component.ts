import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-subproceso1de2',
  templateUrl: './subproceso1de2.component.html',
  styleUrls: ['./subproceso1de2.component.css']
})
export class Subproceso1de2Component implements OnInit {
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
  dato: '';
  ticket: any = this.reserva;
  boleta = false;
  datito = new Date();
  codigoreserva;
  numerofecha;
  fechaActual: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: ReservaService,
  ) { }
  buscar(codigo) {
    const id = codigo.toString();
    this.reservaService.getReserva(id).subscribe(
      res => {
        this.ticket = res;
        this.boleta = true;
        this.codigoreserva = this.ticket.id;
        this.toastr.success('Reserva Encontrada');
      },
      err => {
        this.toastr.error('Reserva no Encontrada');
      }
    );
  }
  postergar(fecha) {
    const estado = this.ticket.Estado;
    if (estado === 'reservado' || estado === 'no vino') {
      this.numerofecha = new Date(fecha).getTime();
      const parametro1 = this.codigoreserva;
      const parametro2 = this.numerofecha;
      this.toastr.info('Proseguir con la postergacion');
      this.router.navigate(
        [
          'admin',
          'procesos',
          'proceso2',
          'subproceso2',
          parametro1,
          parametro2
        ]
      );
    } else {
      this.toastr.warning('el cliente no puede realizar postergacion');
      this.toastr.info(`el estado es: ${estado}`);
    }
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
  }
}
