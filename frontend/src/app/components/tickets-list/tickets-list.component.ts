import { Component, OnInit } from '@angular/core';ticket
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  ticket?: Ticket[];
  currentTicket: Ticket = {};
  currentIndex = -1;
  title = '';
  constructor(private ticketService: TicketService) { }
  ngOnInit(): void {
    this.retrieveTickets();
  }
  retrieveTickets(): void {
    this.ticketService.getAll()
      .subscribe({
        next: (data) => {
          this.tickets = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveTickets();
    this.currentTicket = {};
    this.currentIndex = -1;
  }
  setActiveTicket(ticket: Ticket, index: number): void {
    this.currentTicket = ticket;
    this.currentIndex = index;
  }
  removeAllTickets(): void {
    this.ticketService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchAuthor(): void {
    this.currentTicket = {};
    this.currentIndex = -1;
    this.ticketService.findByAuthor(this.author)
      .subscribe({
        next: (data) => {
          this.tickets = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

