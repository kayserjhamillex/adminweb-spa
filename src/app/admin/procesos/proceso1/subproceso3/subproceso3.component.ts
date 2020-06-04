import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Masajista } from 'src/app/models/masajista';
import { Reservita } from 'src/app/models/reservita';
import { Router, ActivatedRoute } from '@angular/router';
import { HorarioService } from 'src/app/services/horario.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-subproceso3',
  templateUrl: './subproceso3.component.html',
  styleUrls: ['./subproceso3.component.css']
})
export class Subproceso3Component implements OnInit {
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
  reserva: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
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
  codigoservicio;
  cliente;
  fecha;
  horario: any = [];
  filtrada: any = [];
  reservas: any = [];
  reservasdia: any = [];
  horariofiltrado: any = [];
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
    // tslint:disable-next-line: radix
    const codigoservicio = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.codigoservicio = codigoservicio;
    const parametro1 = codigoservicio.toString();
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    this.cliente = cliente;
    // tslint:disable-next-line: radix
    const trabajador = parseInt(this.activatedRoute.snapshot.paramMap.get('trabajador'));
    const codigotrabajador = trabajador.toString();
    const parametro2 = trabajador.toString();
    const lafecha = new Date(fecha);
    this.fecha = lafecha;
    this.reserva.ServicioSId = this.codigoservicio;
    this.reserva.ClienteSId = this.cliente;
    this.reserva.AdminSId = 2;
    if (codigotrabajador) {
      this.masajistaService.getMasajista(codigotrabajador).subscribe(
        res => {
          this.masajista = res;
        },
        err => console.log(err)
      );
    }
    if (parametro1 && parametro2) {
      this.reservaService.getfiltroreservas(parametro2).subscribe(
        res => {
          this.reservas = res;
          const arrayreservas = this.reservas;
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
                  const codigohorario = filtro1.id;
                  for (const filtro2 of array1) {
                    const codigofiltrar = filtro2.HorarioSId;
                    if (codigohorario === codigofiltrar) {
                      filtrado.push(filtro1);
                      this.filtrada = filtrado;
                    }
                  }
                }
                const array3 = this.filtrada;
                // pinshi filtro definitivo
                // const datos1 = [1,2,3,4,5,6,7];
                // const datos2= [3,5,7];
                // const result = datos1.filter(el => !datos2.includes(el));
                // console.log(result);
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
  }
  elegir(wasa) {
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    const fechita = new Date(fecha);
    delete this.reserva.id;
    const estado = 'reservado';
    this.reserva.Estado = estado;
    this.reserva.FechaReserva = fechita;
    this.reserva.HorarioSId = wasa;
    console.log(this.reserva);
    this.reservaService.saveReserva(this.reserva).subscribe(
      res => {
        this.reserva1 = res;
        console.log(this.reserva1);
        this.codigoreserva = this.reserva1.id;
        const parametro = this.codigoreserva.toString();
        this.reservaService.GetReservationSend(parametro).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            this.toastr.success('se creo la reserva');
            this.toastr.info('se envio a su correo');
            this.router.navigate(
              [
                'admin',
                'procesos',
                'proceso1',
                'subproceso4',
                parametro
              ]
            );
          },
          err => {
            this.toastr.error('no se pudo enviar el correo');
          }
        );
      },
      err => {
        // console.log(err);
        this.toastr.error('no se pudo crear la reserva');
      }
    );
  }
}
