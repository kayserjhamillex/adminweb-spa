import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-subproceso1de3',
  templateUrl: './subproceso1de3.component.html',
  styleUrls: ['./subproceso1de3.component.css']
})
export class Subproceso1de3Component implements OnInit {
  servicio: any = [];
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private servicioService: ServicioService,
  ) { }
  getServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.servicio = res;
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
  ngOnInit(): void {
    this.getServicios();
  }
  atencion(wasa) {
    const codigo = wasa;
    const parametro = this.codigocliente;
    // console.log(numerofecha);
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso2',
        codigo,
        parametro
      ]
    );
  }
}
