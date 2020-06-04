import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-servicio',
  templateUrl: './list-servicio.component.html',
  styleUrls: ['./list-servicio.component.css']
})
export class ListServicioComponent implements OnInit {
  servicio: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: ServicioService
  ) { }
  getServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.servicio = res;
      },
      err => console.error(err)
    );
  }
  crear() {
    this.router.navigate(
      [
        'admin',
        'servicio',
        'create'
      ]
    );
  }
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Servicio');
    this.router.navigate(
      [
        'admin',
        'servicio',
        'update',
        codigoaeditar
      ]
    );
  }
  ngOnInit(): void {
    this.getServicios();
  }

}
