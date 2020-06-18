import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  blog: Blog = {
    id: 0,
    Titulo: '',
    Subtitulo: '',
    Resumen: '',
    Descripcion: '',
    ImagendelBlogS: '',
    VideodelBlogS: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }
  saveBlog() {
    delete this.blog.id;
    console.log(this.blog);
    this.blogService.saveBlog(this.blog).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'blog',
            'list'
          ]
        );
        this.toastr.success('Nuevo blog creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo blog');
      }
    );
  }
  ngOnInit(): void {
  }

}
