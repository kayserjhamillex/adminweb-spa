import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/blog';
  constructor(
    private http: HttpClient
  ) { }
  getBlogs() {
    return this.http.get(`${this.apiUrl}`);
  }

  getBlog(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteBlog(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveBlog( Blog: Blog) {
    return this.http.post(`${this.apiUrl}/create`, Blog);
  }

  updateBlog(id: string|number, updatedBlog: Blog): Observable<Blog> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedBlog);
  }
}
