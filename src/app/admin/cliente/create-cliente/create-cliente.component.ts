import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: 'https://www.muycomputerpro.com/wp-content/uploads/2016/05/C%C3%B3mo-reconocer-a-un-turista-3.0.jpg',
    Google: ''
  };

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService
  ) { }
  saveCliente() {
    delete this.cliente.id;
    console.log(this.cliente);
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'cliente',
            'list'
          ]
        );
        this.toastr.success('Nuevo cliente creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo cliente');
      }
    );
  }
  ngOnInit(): void {
  }

}
