import { ToastrService } from 'ngx-toastr';
import { Barbero } from 'src/app/models/barbero';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BarberoService } from 'src/app/services/barbero.service';

@Component({
  selector: 'app-update-barbero',
  templateUrl: './update-barbero.component.html',
  styleUrls: ['./update-barbero.component.css']
})
export class UpdateBarberoComponent implements OnInit {
  barbero: Barbero = {
    id: 0,
    Fullname: '',
    Genero: '',
    Celular: '',
    Email: '',
    ImagenBarbero: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: '',
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private barberoService: BarberoService,
    private activatedRoute: ActivatedRoute,
  ) { }
  updateBarbero() {
    const params = this.activatedRoute.snapshot.params;
    this.barberoService.updateBarbero(params.id, this.barbero).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'barbero',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del barbero');
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
      this.barberoService.getBarbero(params.id).subscribe(
        res => {
          console.log(res);
          this.barbero = res;
        },
        err => console.log(err)
      );
    }
  }

}
