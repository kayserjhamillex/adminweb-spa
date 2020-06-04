import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-create-servicio',
  templateUrl: './create-servicio.component.html',
  styleUrls: ['./create-servicio.component.css']
})
export class CreateServicioComponent implements OnInit {
  servicio: Servicio = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    Iconoservicio: '',
    Imagenservicio: '',
    Monto: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: ServicioService
  ) { }
  saveServicio() {
    delete this.servicio.id;
    console.log(this.servicio);
    this.servicioService.saveServicio(this.servicio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'servicio',
            'list'
          ]
        );
        this.toastr.success('Nuevo servicio creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo servicio');
      }
    );
  }
  ngOnInit(): void {
  }

}
