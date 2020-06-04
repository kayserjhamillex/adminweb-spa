import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG  } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// para los reportes con barras :v
import {ChartModule} from 'primeng/chart';
// accordion and accordion tab
import {AccordionModule} from 'primeng/accordion';
// api
import {MenuItem} from 'primeng/api';
import { Subproceso1Component } from './procesos/proceso1/subproceso1/subproceso1.component';
import { Subproceso2Component } from './procesos/proceso1/subproceso2/subproceso2.component';
import { Subproceso3Component } from './procesos/proceso1/subproceso3/subproceso3.component';
import { Subproceso4Component } from './procesos/proceso1/subproceso4/subproceso4.component';
import { Subproceso1de2Component } from './procesos/proceso2/subproceso1de2/subproceso1de2.component';
import { Subproceso2de2Component } from './procesos/proceso2/subproceso2de2/subproceso2de2.component';
import { Subproceso3de2Component } from './procesos/proceso2/subproceso3de2/subproceso3de2.component';
import { Subproceso4de2Component } from './procesos/proceso2/subproceso4de2/subproceso4de2.component';
import { ListareportesComponent } from './reportes/listareportes/listareportes.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
import { Subproceso1de3Component } from './procesos/proceso3/subproceso1de3/subproceso1de3.component';
import { Subproceso2de3Component } from './procesos/proceso3/subproceso2de3/subproceso2de3.component';
import { Subproceso3de3Component } from './procesos/proceso3/subproceso3de3/subproceso3de3.component';
import { Subproceso4de3Component } from './procesos/proceso3/subproceso4de3/subproceso4de3.component';
import { HomeComponent } from './home/home.component';
import { CreateServicioComponent } from './servicio/create-servicio/create-servicio.component';
import { ListServicioComponent } from './servicio/list-servicio/list-servicio.component';
import { UpdateServicioComponent } from './servicio/update-servicio/update-servicio.component';
import { UpdateBlogComponent } from './blog/update-blog/update-blog.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { ListBarberoComponent } from './barbero/list-barbero/list-barbero.component';
import { CreateBarberoComponent } from './barbero/create-barbero/create-barbero.component';
import { UpdateBarberoComponent } from './barbero/update-barbero/update-barbero.component';
import { UpdateMasajistaComponent } from './masajista/update-masajista/update-masajista.component';
import { CreateMasajistaComponent } from './masajista/create-masajista/create-masajista.component';
import { ListMasajistaComponent } from './masajista/list-masajista/list-masajista.component';
import { CreateHorarioComponent } from './horario/create-horario/create-horario.component';
import { ListHorarioComponent } from './horario/list-horario/list-horario.component';
import { UpdateHorarioComponent } from './horario/update-horario/update-horario.component';



@NgModule({
  declarations: [
    AdminComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    ListClienteComponent,
    CreateAdminComponent,
    UpdateAdminComponent,
    ListAdminComponent,
    Subproceso1Component,
    Subproceso2Component,
    Subproceso3Component,
    Subproceso4Component,
    Subproceso1de2Component,
    Subproceso2de2Component,
    Subproceso3de2Component,
    Subproceso4de2Component,
    ListareportesComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Subproceso1de3Component,
    Subproceso2de3Component,
    Subproceso3de3Component,
    Subproceso4de3Component,
    HomeComponent,
    CreateServicioComponent,
    ListServicioComponent,
    UpdateServicioComponent,
    UpdateBlogComponent,
    CreateBlogComponent,
    ListBlogComponent,
    ListBarberoComponent,
    CreateBarberoComponent,
    UpdateBarberoComponent,
    UpdateMasajistaComponent,
    CreateMasajistaComponent,
    ListMasajistaComponent,
    CreateHorarioComponent,
    ListHorarioComponent,
    UpdateHorarioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // primeng
    AccordionModule,
    ChartModule,
    ReactiveFormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot(),
  ]
})
export class AdminModule { }
