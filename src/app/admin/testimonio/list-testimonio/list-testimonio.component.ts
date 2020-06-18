import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { TestimonioService } from 'src/app/services/testimonio.service';

@Component({
  selector: 'app-list-testimonio',
  templateUrl: './list-testimonio.component.html',
  styleUrls: ['./list-testimonio.component.css']
})
export class ListTestimonioComponent implements OnInit {
  testimonios: any = [] ;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private testimonioService: TestimonioService,
  ) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  getAdmins() {
    this.testimonioService.getTestimonios().subscribe(
      res => {
        this.testimonios = res;
      },
      err => console.error(err)
    );
  }
  crear() {
    this.router.navigate(
      [
        'admin',
        'testimonio',
        'create'
      ]
    );
  }

  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Testimonio');
    this.router.navigate(
      [
        'admin',
        'testimonio',
        'update',
        codigoaeditar
      ]
    );
  }

}
