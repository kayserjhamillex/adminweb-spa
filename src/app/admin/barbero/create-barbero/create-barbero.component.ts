import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Barbero } from 'src/app/models/barbero';
import { Component, OnInit } from '@angular/core';
import { BarberoService } from 'src/app/services/barbero.service';

@Component({
  selector: 'app-create-barbero',
  templateUrl: './create-barbero.component.html',
  styleUrls: ['./create-barbero.component.css']
})
export class CreateBarberoComponent implements OnInit {
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
    private barberoService: BarberoService
  ) { }
  saveBarbero() {
    delete this.barbero.id;
    console.log(this.barbero);
    this.barberoService.saveBarbero(this.barbero).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'barbero',
            'list'
          ]
        );
        this.toastr.success('Nuevo barbero creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo barbero');
      }
    );
  }
  ngOnInit(): void {
  }

}
