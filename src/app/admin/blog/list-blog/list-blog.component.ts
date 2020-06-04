import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blog: any = [] ;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }
  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blog = res;
      },
      err => console.error(err)
    );
  }
  crear() {
    this.router.navigate(
      [
        'admin',
        'blog',
        'create'
      ]
    );
  }
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Blog');
    this.router.navigate(
      [
        'admin',
        'blog',
        'update',
        codigoaeditar
      ]
    );
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
