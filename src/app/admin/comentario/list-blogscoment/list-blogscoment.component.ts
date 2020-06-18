import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blogscoment',
  templateUrl: './list-blogscoment.component.html',
  styleUrls: ['./list-blogscoment.component.css']
})
export class ListBlogscomentComponent implements OnInit {
  blogs: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }
  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blogs = res;
      },
      err => console.error(err)
    );
  }

  vizualizar(codigo) {
    console.log(codigo);
    const codigoaver = codigo;
    this.toastr.info('Ver los comentarios del blog');
    this.router.navigate(
      [
        'admin',
        'comentarios',
        'list',
        codigoaver
      ]
    );
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
