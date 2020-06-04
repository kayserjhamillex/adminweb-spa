import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Masajista } from 'src/app/models/masajista';
import { Router, ActivatedRoute } from '@angular/router';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-update-masajista',
  templateUrl: './update-masajista.component.html',
  styleUrls: ['./update-masajista.component.css']
})
export class UpdateMasajistaComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,
    private masajistaService: MasajistaService,
  ) { }

  updateMasajista() {
    const params = this.activatedRoute.snapshot.params;
    this.masajistaService.updateMasajista(params.id, this.masajista).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'masajista',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del masajista');
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
      this.masajistaService.getMasajista(params.id).subscribe(
        res => {
          console.log(res);
          this.masajista = res;
        },
        err => console.log(err)
      );
    }
  }

}
