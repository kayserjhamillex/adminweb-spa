import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-subproceso2',
  templateUrl: './subproceso2.component.html',
  styleUrls: ['./subproceso2.component.css']
})
export class Subproceso2Component implements OnInit {
  masajista: any = [];
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: 'https://www.muycomputerpro.com/wp-content/uploads/2016/05/C%C3%B3mo-reconocer-a-un-turista-3.0.jpg',
    Google: '0'
  };
  dato: '';
  cliente1: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: 'https://www.muycomputerpro.com/wp-content/uploads/2016/05/C%C3%B3mo-reconocer-a-un-turista-3.0.jpg',
    Google: '0'
  };
  botones = true;
  buscar = false;
  crear = false;
  datoscliente = false;
  codigocliente;
  codigomasajista;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
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
  buscarcliente() {
    this.buscar = true;
    // console.log(this.buscar);
    this.botones = false;
    // console.log(this.botones);
  }
  crearcliente() {
    this.crear = true;
    // console.log(this.crear);
    this.botones = false;
    // console.log(this.botones);
  }

  saveCliente() {
    delete this.cliente.id;
    this.cliente.Password = this.cliente.Numerodocumento;
    console.log(this.cliente);
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Nuevo cliente creado');
        this.datoscliente = true;
        this.crear = false;
      },
      err => {
        // console.error(err);
        this.toastr.error('no se pudo crear un nuevo cliente');
      }
    );
  }
  searchEmailCliente() {
    // console.log(this.dato);
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.datoscliente = true;
        this.buscar = false;
      },
      err => {
        // console.error(err);
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  searchDocCliente() {
    // console.log(this.dato);
    this.clienteService.getClientedoc(this.dato).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.datoscliente = true;
        this.buscar = false;
      },
      err => {
        // console.error(err);
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  elegir(codigo) {
    // console.log(codigo);
    const numeromasajista = codigo;
    this.codigomasajista = numeromasajista;
  }
  elegirhorario() {
    // tslint:disable-next-line: radix
    const codigoservicio = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // console.log(this.codigocliente);
    // console.log(this.codigomasajista);
    const parametro1 = this.codigocliente;
    const parametro2 = this.codigomasajista;
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso3',
        codigoservicio,
        fecha,
        parametro1,
        parametro2
      ]
    );
  }
  ngOnInit(): void {
    this.getMasajistas();
  }

}
