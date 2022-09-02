import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attachement } from '../models/attachement.model';
const baseUrl = 'http://localhost:8080/api/attachement';

@Injectable({
  providedIn: 'root'
})
export class AttachementService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Attachement[]> {
    return this.http.get<Attachement[]>(baseUrl);
  }
  get(id: any): Observable<Attachement> {
    return this.http.get<Attachement>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.Attachement(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByAuthor(author: any): Observable<Attachement[]> {
    return this.http.get<Attachement[]>(`${baseUrl}?author=${author}`);
  }
}
