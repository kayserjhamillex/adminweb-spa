import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listareportes',
  templateUrl: './listareportes.component.html',
  styleUrls: ['./listareportes.component.css']
})
export class ListareportesComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) { }
  reporte1() {
    this.toastr.info('ver el reporte 1');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte1'
      ]
    );
  }
  reporte2() {
    this.toastr.info('ver el reporte 2');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte2'
      ]
    );
  }
  reporte3() {
    this.toastr.info('ver el reporte 3');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte3'
      ]
    );
  }
  reporte4() {
    this.toastr.info('ver el reporte 4');
    this.router.navigate(
      [
        'admin',
        'reportes',
        'reporte4'
      ]
    );
  }
  ngOnInit(): void {
  }

}
