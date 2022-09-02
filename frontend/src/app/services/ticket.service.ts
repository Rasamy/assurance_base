import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
const baseUrl = 'http://localhost:8080/api/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrl);
  }
  get(id: any): Observable<Ticket> {
    return this.http.get<Ticket>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
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
  findByAuthor(author: any): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${baseUrl}?title=${author}`);
  }
}

