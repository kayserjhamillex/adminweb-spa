import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-list-masajista',
  templateUrl: './list-masajista.component.html',
  styleUrls: ['./list-masajista.component.css']
})
export class ListMasajistaComponent implements OnInit {
  masajista: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private masajistaService: MasajistaService
  ) { }
  getMasajistas() {
    this.masajistaService.getMasajistas().subscribe(
      res => {
        this.masajista = res;
      },
      err => console.error(err)
    );
  }
  crear() {
    this.router.navigate(
      [
        'admin',
        'masajista',
        'create'
      ]
    );
  }

  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Masajista');
    this.router.navigate(
      [
        'admin',
        'masajista',
        'update',
        codigoaeditar
      ]
    );
  }
  ngOnInit(): void {
    this.getMasajistas();
  }

}
