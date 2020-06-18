import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HorarioService } from 'src/app/services/horario.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { MasajistaService } from 'src/app/services/masajista.service';
import { Reservita } from 'src/app/models/reservita';

@Component({
  selector: 'app-subproceso2de3',
  templateUrl: './subproceso2de3.component.html',
  styleUrls: ['./subproceso2de3.component.css']
})
export class Subproceso2de3Component implements OnInit {
  masajistas: any = [];
  horario: any = [];
  horariofiltrado: any = [];
  hoy = new Date();
  reservas: any = [];
  reservasdia: any = [];
  filtrada: any = [];
  numerofecha = new Date().getTime();
  dia;
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
  cliente;
  codigoservicio;
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
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    this.cliente = cliente;
    this.reserva.ServicioSId = this.codigoservicio;
    this.reserva.ClienteSId = this.cliente;
    this.reserva.AdminSId = 2;
    const lafecha = new Date(this.numerofecha);
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
    this.dia = nombredia;
    this.masajistaService.getfiltermasajista(nombredia).subscribe(
      res => {
        this.masajistas = res;
        if (Object.entries(this.masajistas).length > 0) {
          this.toastr.info('masajistas disponibles hoy');
        } else if (Object.entries(this.masajistas).length === 0) {
          this.toastr.error('no hay masajistas disponibles');
        }
      }
    );

  }

  elegir(wasa) {
    const eldia = this.dia;
    const codigo = wasa;
    const fecha = this.numerofecha;
    this.reservaService.getfiltroreservas(codigo).subscribe(
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
        this.horarioService.getHorarioMasajistaDia(eldia, codigo).subscribe(
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

  elegirhora(wasa) {
    delete this.reserva.id;
    const estado = 'atendido';
    const hoy = new Date();
    this.reserva.FechaReserva = hoy;
    this.reserva.Estado = estado;
    this.reserva.HorarioSId = wasa;
    console.log(this.reserva);
    this.reservaService.saveReserva(this.reserva).subscribe(
      res => {
        this.reserva1 = res;
        console.log(this.reserva1);
        this.codigoreserva = this.reserva1.id;
        const parametro = this.codigoreserva.toString();
        this.router.navigate(
          [
            'admin',
            'procesos',
            'proceso3',
            'subproceso3',
            parametro
          ]
        );
      },
      err => {
        this.toastr.error('no se pudo crear la reserva');
      }
    );
  }

}
