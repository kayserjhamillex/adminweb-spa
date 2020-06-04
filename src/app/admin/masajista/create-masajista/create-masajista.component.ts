import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Masajista } from 'src/app/models/masajista';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-create-masajista',
  templateUrl: './create-masajista.component.html',
  styleUrls: ['./create-masajista.component.css']
})
export class CreateMasajistaComponent implements OnInit {
  masajista: Masajista = {
    id: 0,
    Fullname: '',
    Genero: '',
    Celular: '',
    Email: '',
    ImagenMasajista: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: '',
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private masajistaService: MasajistaService
  ) { }
  saveMasajista() {
    delete this.masajista.id;
    console.log(this.masajista);
    this.masajistaService.saveMasajista(this.masajista).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'masajista',
            'list'
          ]
        );
        this.toastr.success('Nuevo masajista creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo masajista');
      }
    );
  }
  ngOnInit(): void {
  }

}
