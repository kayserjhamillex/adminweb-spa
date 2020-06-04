import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Masajista } from 'src/app/models/masajista';
import { HorarioService } from 'src/app/services/horario.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-list-horario',
  templateUrl: './list-horario.component.html',
  styleUrls: ['./list-horario.component.css']
})
export class ListHorarioComponent implements OnInit {
  masajista: any = [];
  horarios: any = [];
  dias = [
    { id: 1, name: 'lunes'},
    { id: 2, name: 'martes'},
    { id: 3, name: 'miercoles'},
    { id: 4, name: 'jueves'},
    { id: 5, name: 'viernes'},
    { id: 6, name: 'sabado'},
    { id: 7, name: 'domingo'},
  ];
  data = {
    dia: '',
    codigo: 0
  };
  masajista1: Masajista = {
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
  datos = {
    nombre: '',
    dia: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private horarioService: HorarioService,
    private masajistaService: MasajistaService
  ) { }
  getMasajistas() {
    this.masajistaService.getMasajistas().subscribe(
      res => {
        this.masajista = res;
      },
      err => console.error(err)
    );
  }
  elejir(codigo) {
    this.data.codigo = codigo;
    this.masajistaService.getMasajista(codigo).subscribe(
      res => {
        this.masajista1 = res;
        this.datos.nombre = this.masajista1.Fullname;
      },
      err => {
        console.log(err);
      }
    );
  }
  diaelegido(name) {
    this.data.dia = name;
    this.datos.dia = name;
  }
  viewhorario() {
    console.log(this.data);
    const dia = this.data.dia.toString();
    const codigo = this.data.codigo.toString();
    this.horarioService.getHorarioMasajistaDia(dia, codigo).subscribe(
      res => {
        this.horarios = res;
      }
    );
  }
  editar(wasa) {
    console.log(wasa);
    this.toastr.warning('la edicion esta disponible en la version platinum');
    this.router.navigate(
      [
        'admin',
        'horario',
        'update',
        wasa
      ]
    );
  }
  ngOnInit(): void {
    this.getMasajistas();
  }

}
