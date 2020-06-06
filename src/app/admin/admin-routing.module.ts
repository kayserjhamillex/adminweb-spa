import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { UpdateBlogComponent } from './blog/update-blog/update-blog.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { ListBarberoComponent } from './barbero/list-barbero/list-barbero.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { ListHorarioComponent } from './horario/list-horario/list-horario.component';
import { ListServicioComponent } from './servicio/list-servicio/list-servicio.component';
import { ListareportesComponent } from './reportes/listareportes/listareportes.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
import { CreateBarberoComponent } from './barbero/create-barbero/create-barbero.component';
import { UpdateBarberoComponent } from './barbero/update-barbero/update-barbero.component';
import { CreateHorarioComponent } from './horario/create-horario/create-horario.component';
import { UpdateHorarioComponent } from './horario/update-horario/update-horario.component';
import { Subproceso1Component } from './procesos/proceso1/subproceso1/subproceso1.component';
import { Subproceso2Component } from './procesos/proceso1/subproceso2/subproceso2.component';
import { Subproceso3Component } from './procesos/proceso1/subproceso3/subproceso3.component';
import { Subproceso4Component } from './procesos/proceso1/subproceso4/subproceso4.component';
import { ListMasajistaComponent } from './masajista/list-masajista/list-masajista.component';
import { CreateServicioComponent } from './servicio/create-servicio/create-servicio.component';
import { UpdateServicioComponent } from './servicio/update-servicio/update-servicio.component';
import { CreateMasajistaComponent } from './masajista/create-masajista/create-masajista.component';
import { UpdateMasajistaComponent } from './masajista/update-masajista/update-masajista.component';
import { Subproceso1de2Component } from './procesos/proceso2/subproceso1de2/subproceso1de2.component';
import { Subproceso2de2Component } from './procesos/proceso2/subproceso2de2/subproceso2de2.component';
import { Subproceso3de2Component } from './procesos/proceso2/subproceso3de2/subproceso3de2.component';
import { Subproceso4de2Component } from './procesos/proceso2/subproceso4de2/subproceso4de2.component';
import { Subproceso1de3Component } from './procesos/proceso3/subproceso1de3/subproceso1de3.component';
import { Subproceso2de3Component } from './procesos/proceso3/subproceso2de3/subproceso2de3.component';
import { Subproceso3de3Component } from './procesos/proceso3/subproceso3de3/subproceso3de3.component';
import { Subproceso4de3Component } from './procesos/proceso3/subproceso4de3/subproceso4de3.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'cliente',
        children: [
          {
            path: 'list',
            component: ListClienteComponent
          },
          {
            path: 'create',
            component: CreateClienteComponent
          },
          {
            path: 'update/:id',
            component: UpdateClienteComponent
          }
        ]
      },
      {
        path: 'blog',
        children: [
          {
            path: 'list',
            component: ListBlogComponent
          },
          {
            path: 'create',
            component: CreateBlogComponent
          },
          {
            path: 'update/:id',
            component: UpdateBlogComponent
          },
        ]
      },
      {
        path: 'servicio',
        children: [
          {
            path: 'list',
            component: ListServicioComponent
          },
          {
            path: 'create',
            component: CreateServicioComponent
          },
          {
            path: 'update/:id',
            component: UpdateServicioComponent
          },
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: 'list',
            component: ListAdminComponent
          },
          {
            path: 'create',
            component: CreateAdminComponent
          },
          {
            path: 'update/:id',
            component: UpdateAdminComponent
          },
        ]
      },
      {
        path: 'masajista',
        children: [
          {
            path: 'list',
            component: ListMasajistaComponent
          },
          {
            path: 'create',
            component: CreateMasajistaComponent
          },
          {
            path: 'update/:id',
            component: UpdateMasajistaComponent
          },
        ]
      },
      {
        path: 'horario',
        children: [
          {
            path: 'list',
            component: ListHorarioComponent
          },
          {
            path: 'create',
            component: CreateHorarioComponent
          },
          {
            path: 'update/:id',
            component: UpdateHorarioComponent
          },
        ]
      },
      // {
      //   path: 'barbero',
      //   children: [
      //     {
      //       path: 'list',
      //       component: ListBarberoComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateBarberoComponent
      //     },
      //     {
      //       path: 'update/:id',
      //       component: UpdateBarberoComponent
      //     },
      //   ]
      // },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'reportes',
        children: [
          {
            path: 'list',
            component: ListareportesComponent
          },
          {
            path: 'reporte1',
            component: Reporte1Component
          },
          {
            path: 'reporte2',
            component: Reporte2Component
          },
          {
            path: 'reporte3',
            component: Reporte3Component
          },
          {
            path: 'reporte4',
            component: Reporte4Component
          },
        ]
      },
      {
        path: 'procesos',
        children: [
          {
            path: 'proceso1',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1Component
              },
              {
                path: 'subproceso2/:id/:fecha',
                component: Subproceso2Component
              },
              {
                path: 'subproceso3/:id/:fecha/:cliente/:trabajador',
                component: Subproceso3Component
              },
              {
                path: 'subproceso4/:id',
                component: Subproceso4Component
              },
            ]
          },
          {
            path: 'proceso2',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de2Component
              },
              {
                path: 'subproceso2/:id/:fecha',
                component: Subproceso2de2Component
              },
              {
                path: 'subproceso3/:id/:fecha/:servicio/:trabajador',
                component: Subproceso3de2Component
              },
              {
                path: 'subproceso4/:id',
                component: Subproceso4de2Component
              },
            ]
          },
          {
            path: 'proceso3',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de3Component
              },
              {
                path: 'subproceso2/:id/:cliente',
                component: Subproceso2de3Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de3Component
              },
              {
                path: 'subproceso4',
                component: Subproceso4de3Component
              },
            ]
          },
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
