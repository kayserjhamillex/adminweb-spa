import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BarberoService } from 'src/app/services/barbero.service';

@Component({
  selector: 'app-list-barbero',
  templateUrl: './list-barbero.component.html',
  styleUrls: ['./list-barbero.component.css']
})
export class ListBarberoComponent implements OnInit {
  barbero: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private barberoService: BarberoService
  ) { }
  getBarberos() {
    this.barberoService.getBarberos().subscribe(
      res => {
        this.barbero = res;
      },
      err => console.error(err)
    );
  }
  crear() {
    this.router.navigate(
      [
        'admin',
        'barbero',
        'create'
      ]
    );
  }

  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Barbero');
    this.router.navigate(
      [
        'admin',
        'barbero',
        'update',
        codigoaeditar
      ]
    );
  }
  ngOnInit(): void {
    this.getBarberos();
  }

}
