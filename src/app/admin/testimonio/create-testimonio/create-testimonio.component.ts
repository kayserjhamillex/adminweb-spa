import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListTestimonio } from 'src/app/models/listtest';
import { ClienteService } from 'src/app/services/cliente.service';
import { TestimonioService } from 'src/app/services/testimonio.service';

@Component({
  selector: 'app-create-testimonio',
  templateUrl: './create-testimonio.component.html',
  styleUrls: ['./create-testimonio.component.css']
})
export class CreateTestimonioComponent implements OnInit {
  testimonio: ListTestimonio = {
    id: 0,
    Testimonio: '',
    AdminSId: 2,
    ClienteSId: 0
  };
  dato: '';
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: 'https://www.muycomputerpro.com/wp-content/uploads/2016/05/C%C3%B3mo-reconocer-a-un-turista-3.0.jpg',
    Google: '0'
  };
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
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private testimonioService: TestimonioService,
  ) { }
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
  }

  createtestimonian() {
    this.testimonio.ClienteSId = this.codigocliente;
    delete this.testimonio.id;
    console.log(this.testimonio);
    this.testimonioService.saveTestimonio(this.testimonio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'testimonio',
            'list'
          ]
        );
        this.toastr.success('Nuevo testimonio creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo testimonio');
      }
    );
  }
}
