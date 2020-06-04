import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/blog';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  blog: Blog = {
    id: 0,
    Titulo: '',
    Subtitulo: '',
    Resumen: '',
    Descripcion: '',
    Imagendelblog: '',
    Videodelblog: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
  ) { }
  updateBlog() {
    // tslint:disable-next-line: one-variable-per-declaration
    const params = this.activatedRoute.snapshot.params;
    this.blogService.updateBlog(params.id, this.blog).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'blog',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del blog');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.blogService.getBlog(params.id).subscribe(
        res => {
          console.log(res);
          this.blog = res;
        },
        err => console.log(err)
      );
    }
  }

}
