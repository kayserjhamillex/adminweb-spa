import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-update-servicio',
  templateUrl: './update-servicio.component.html',
  styleUrls: ['./update-servicio.component.css']
})
export class UpdateServicioComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
  ) { }
  updateServicio() {
    // tslint:disable-next-line: one-variable-per-declaration
    const params = this.activatedRoute.snapshot.params;
    this.servicioService.updateServicio(params.id, this.servicio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'servicio',
            'list'
          ]
        );
        this.toastr.success('actualizando los datos del servicio');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar');
      }
    );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.servicioService.getServicio(params.id).subscribe(
        res => {
          console.log(res);
          this.servicio = res;
        },
        err => console.log(err)
      );
    }
  }

}
