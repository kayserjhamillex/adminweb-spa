import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recover } from 'src/app/models/recover';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  correo = '';
  admin: Recover = {
    id: 0,
    Fullname: '',
    Correo: ''
  };
  respuesta: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService
  ) { }

  confirmar() {
    console.log(this.correo);
    const email = this.correo;
    this.adminService.getSearch(this.correo).subscribe(
      res => {
        if (res) {
          this.admin = res;
          const codigo = this.admin.id.toString();
          this.adminService.getRecover(codigo).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.respuesta = res;
              this.toastr.success('Por favor Confirme la actualizacion en su correo');
            },
            err => {
              this.toastr.error('No se pudo enviar el Correo');
            }
          );
        } else {
          this.toastr.error('Correo no es de la empresa');
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
