import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit {
  parametros = {
    Fechastart: new Date(),
    Fechaend: new Date(),
  };
  data = {
    fecha1: '',
    fecha2: ''
  };
  sinfechas = true;
  reportegrafico = false;
  reportetablas = false;
  reporte: any = [];
  datarepo: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reporteService: ReportesService,
  ) {
    this.datarepo = {
      labels: [],
      datasets: [
        {
          label: 'atenciones',
          backgroundColor: '#9399ff',
          borderColor: '#ff80b0',
          data: []
        },
        {
          label: 'ingresos',
          backgroundColor: '#a9fffd',
          borderColor: '#ff80b0',
          data: []
        },
      ]
    };
  }
  Vizualizartablas() {
    console.log(this.parametros);
    this.data.fecha1 = this.parametros.Fechastart.toString();
    this.data.fecha2 = this.parametros.Fechaend.toString();
    console.log(this.data);
    const date1 = this.data.fecha1;
    const date2 = this.data.fecha2;
    this.reporteService.getcustomer(date1, date2).subscribe(
      res => {
        this.reporte = res;
        this.toastr.success('Apreciar el Reporte en tablas');
        this.sinfechas = false;
        this.reportetablas = true;
        this.reportegrafico = false;
      }
    );
  }
  Vizualizargrafico() {
    console.log(this.parametros);
    this.data.fecha1 = this.parametros.Fechastart.toString();
    this.data.fecha2 = this.parametros.Fechaend.toString();
    console.log(this.data);
    const date1 = this.data.fecha1;
    const date2 = this.data.fecha2;
    this.reporteService.getcustomer(date1, date2).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Apreciar el Reporte en grafico');
        const trabajador = res.map( (ele) => ele.cliente);
        const atenciones = res.map( (ele) => +ele.atenciones);
        const ingresos = res.map( (ele) => +ele.ingresos);
        this.datarepo.labels = trabajador;
        this.datarepo.datasets[0].data = atenciones;
        this.datarepo.datasets[1].data = ingresos;
        console.log(this.datarepo);
        this.sinfechas = false;
        this.reportegrafico = true;
        this.reportetablas = false;
      },
    );
  }
  ngOnInit(): void {
  }

}
