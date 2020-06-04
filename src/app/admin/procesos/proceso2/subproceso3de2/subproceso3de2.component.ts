import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { Masajista } from 'src/app/models/masajista';
import { Reservita } from 'src/app/models/reservita';
import { Router, ActivatedRoute } from '@angular/router';
import { HorarioService } from 'src/app/services/horario.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-subproceso3de2',
  templateUrl: './subproceso3de2.component.html',
  styleUrls: ['./subproceso3de2.component.css']
})
export class Subproceso3de2Component implements OnInit {
  masajista: Masajista = {
    id: 0,
    Fullname: '',
    Genero: '',
    Celular: '',
    Email: '',
    ImagenMasajista: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: '',
  };
  reserva1: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
  };
  reserva2: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
  };
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
  ticket: any = this.reserva;
  codigoservicio;
  cliente;
  fecha;
  horario: any = [];
  reservas: any = [];
  reservasdia: any = [];
  horariofiltrado: any = [];
  filtrada: any = [];
  reservaid;
  codigoreserva;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
    private masajistaService: MasajistaService,
  ) { }

  ngOnInit(): void {
    // this.getreservas();
    // tslint:disable-next-line: radix
    const codigoservicio = parseInt(this.activatedRoute.snapshot.paramMap.get('servicio'));
    this.codigoservicio = codigoservicio;
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const codigoreserva = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    const reserva = codigoreserva.toString();
    const parametro1 = codigoservicio.toString();
    this.reservaid = reserva;
    // tslint:disable-next-line: radix
    const trabajador = parseInt(this.activatedRoute.snapshot.paramMap.get('trabajador'));
    const codigotrabajador = trabajador.toString();
    const parametro2 = trabajador.toString();
    const lafecha = new Date(fecha);
    this.fecha = lafecha;
    this.reserva1.ServicioSId = this.codigoservicio;
    this.reserva1.AdminSId = 2;
    const array =
          [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes'
          ];
    const fechasa = lafecha.setDate(lafecha.getDate() + 1);
    const fechaselect = new Date(fechasa);
    const numerodia = fechaselect.getUTCDay() - 1;
    let nombredia = array[numerodia];
    if (numerodia === -1) {
      nombredia = 'sabado';
    }
    if (codigotrabajador) {
      this.masajistaService.getMasajista(codigotrabajador).subscribe(
        res => {
          this.masajista = res;
        },
        err => {
          console.log(err);
        }
      );
    }
    if (parametro1 && parametro2) {
      this.reservaService.getfiltroreservas(parametro2).subscribe(
        res => {
          this.reservas = res;
          const arrayreservas = this.reservas;
          const reservasfecha = [];
          for (const obj1 of arrayreservas) {
            const numfecha = new Date(obj1.FechaReserva).getTime();
            if (numfecha === fecha) {
              reservasfecha.push(obj1);
              this.reservasdia = reservasfecha;
            }
          }
          this.horarioService.getHorarioMasajistaDia(nombredia, codigotrabajador).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.horario = res;
              if (Object.entries(this.reservasdia).length > 0) {
                const array1 = this.reservasdia;
                const array2 = this.horario;
                const filtrado: any = [];
                for (const filtro1 of array2) {
                  for (const filtro2 of array1) {
                    if (filtro1.id === filtro2.HorarioSId) {
                      filtrado.push(filtro1);
                      this.filtrada = filtrado;
                    }
                  }
                }
                const array3 = this.filtrada;
                const respuesta = array2.filter(alv => !array3.includes(alv));
                this.horariofiltrado = respuesta;
              } else if (Object.entries(this.reservasdia).length === 0) {
                this.horariofiltrado = this.horario;
              }
            },
            err => {
              console.log(err);
            }
          );
        },
        err => {
          console.log(err);
        }
      );
    }
    if (reserva) {
      this.reservaService.getReserva(reserva).subscribe(
        res => {
          this.ticket = res;
          this.reserva1.ClienteSId = this.ticket.ClienteSId;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  elegir(wasa) {
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    const fechita = new Date(fecha);
    const estado = 'postergado';
    this.reserva1.Estado = estado;
    this.reserva1.FechaReserva = fechita;
    delete this.reserva1.id;
    this.reserva1.HorarioSId = wasa;
    const id = this.reservaid.toString();
    this.reservaService.updateReserva(id, this.reserva1).subscribe(
      res => {
        this.reserva2 = res;
        this.codigoreserva = id;
        const parametro = this.codigoreserva.toString();
        this.reservaService.GetPostponementSend(parametro).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            this.toastr.success('se postergo con exito');
            this.toastr.info('se envio el correo de la postergacion');
            this.router.navigate(
              [
                'admin',
                'procesos',
                'proceso2',
                'subproceso4',
                parametro
              ]
            );
          },
          err => {
            this.toastr.error('no se pudo eviar el correo');
          }
        );
      },
      err => {
        // console.log(err);
        this.toastr.error('no se pudo actualizar');
      }
    );
  }

}
