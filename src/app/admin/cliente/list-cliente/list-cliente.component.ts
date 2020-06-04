import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  cliente: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  getAdmins() {
    this.clienteService.getClientes().subscribe(
      res => {
        this.cliente = res;
      },
      err => console.error(err)
    );
  }
  crear() {
    this.router.navigate(
      [
        'admin',
        'cliente',
        'create'
      ]
    );
  }

  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Admin');
    this.router.navigate(
      [
        'admin',
        'cliente',
        'update',
        codigoaeditar
      ]
    );
  }

}
