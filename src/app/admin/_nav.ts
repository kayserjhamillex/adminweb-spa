import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/home',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Pilares'
  },
  {
    name: 'Admin',
    url: '/admin/wasa',
    icon: 'icon-drop',
    children: [
      {
        name: 'Lista Admins',
        url: '/admin/admin/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Admin',
        url: '/admin/admin/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Cliente',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Clientes',
        url: '/admin/cliente/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Cliente',
        url: '/admin/cliente/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Servicio',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Servicios',
        url: '/admin/servicio/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Servicio',
        url: '/admin/servicio/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Masajista',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Masajistas',
        url: '/admin/masajista/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Masajista',
        url: '/admin/masajista/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Blog',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Blogs',
        url: '/admin/blog/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Blog',
        url: '/admin/blog/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Testimonio',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Testimonios',
        url: '/admin/testimonio/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Testimonios',
        url: '/admin/testimonio/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Comentarios',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista de Blogs',
        url: '/admin/comentarios/listblog',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Horario',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Horarios',
        url: '/admin/horario/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Horario',
        url: '/admin/horario/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Procesos'
  },
  {
    name: 'Reserva',
    url: '/admin/wasa',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Nueva Reserva',
        url: '/admin/procesos/proceso1/subproceso1',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Postergar',
    url: '/admin/wasa',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Realizar Postergacion',
        url: '/admin/procesos/proceso2/subproceso1',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Atenciones',
    url: '/admin/wasa',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Nueva Atencion',
        url: '/admin/procesos/proceso3/subproceso1',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Reportes',
  },
  {
    name: 'Reportes',
    url: '/admin/wasa',
    icon: 'icon-star',
    children: [
      {
        name: 'Lista de Reportes',
        url: '/admin/reportes/list',
        icon: 'icon-star'
      }
    ]
  }
];
