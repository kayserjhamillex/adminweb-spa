import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { HorarioTable } from 'src/app/models/horariotable';
import { HoraService } from 'src/app/services/hora.service';
import { HorarioService } from 'src/app/services/horario.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrls: ['./create-horario.component.css']
})
export class CreateHorarioComponent implements OnInit {
  dia: '';
  data = {
    inicio: 0,
    fin: 0,
    dia: '',
    masajista: 0
  };
  horario: HorarioTable = {
    id: 0,
    Dia: '',
    MasajistaId: 0,
    HoraId: 0,
  };
  horario1: HorarioTable = {
    id: 0,
    Dia: '',
    MasajistaId: 0,
    HoraId: 0,
  };
  horas: any = [];
  masajista: any = [];
  previo: any = [];
  codigoinicio;
  codigofin;
  numeros: any = [];
  dias = [
    { id: 1, name: 'lunes'},
    { id: 2, name: 'martes'},
    { id: 3, name: 'miercoles'},
    { id: 4, name: 'jueves'},
    { id: 5, name: 'viernes'},
    { id: 6, name: 'sabado'},
    { id: 7, name: 'domingo'},
  ];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private horaService: HoraService,
    private horarioService: HorarioService,
    private masajistaService: MasajistaService
  ) { }
  getHoras() {
    this.horaService.getHoras().subscribe(
      res => {
        this.horas = res;
      },
      err => console.error(err)
    );
  }
  getMasajistas() {
    this.masajistaService.getMasajistas().subscribe(
      res => {
        this.masajista = res;
      },
      err => console.error(err)
    );
  }
  inicio(codigo1) {
    const startcodigo = codigo1;
    this.data.inicio = startcodigo;
  }
  fin(codigo2) {
    const endcodigo = codigo2;
    this.data.fin = endcodigo;
    const inicio = this.data.inicio;
    const fin = this.data.fin + 1;
    const alv: any = [];
    for (let counter = inicio; counter < fin; counter++){
      // console.log('for loop executed : ' + counter);
      alv.push(counter);
      this.numeros = alv;
    }
    // console.log(this.numeros);
  }
  elejir(codigo3) {
    const codigowork = codigo3;
    this.data.masajista = codigo3;
    this.horario.MasajistaId = codigowork;
  }
  diaelegido(name) {
    const wasa = {
      Dia: '',
      MasajistaId: 0,
      HoraId: 0,
    };
    this.data.dia = name;
    const diaelegido = name;
    this.horario.Dia = diaelegido;
    wasa.Dia = this.data.dia;
    wasa.MasajistaId = this.data.masajista;
    console.log(this.numeros);
    const array = this.numeros;
    const vista: any = [];
    for (const obj of array) {
      // console.log(obj);
      wasa.HoraId = obj;
      console.log(wasa);
      this.horarioService.saveHorario(wasa).subscribe(
        res => {
          console.log(res);
          vista.push(res);
          this.previo = vista;
        },
        err => {
          console.log(err);
        }
      );
    }
    console.log(this.previo);
  }
  limpiar() {
    this.previo = [];
  }
  finalizar() {
    this.router.navigate(
      [
        'admin',
        'horario',
        'list'
      ]
    );
  }
  ngOnInit(): void {
    this.getHoras();
    this.getMasajistas();
  }

}
