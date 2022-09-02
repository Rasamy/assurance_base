import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  ticket: Ticket = {
    title: '',
    description: '',
    status: true,
    author: 3
  };
  submitted = false;
  statusOptions = [
    { id: true, label: "Ouvert" },
    { id: false, label: "Fermé" }
  ];
  constructor(private ticketService: TicketService) { }
  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      title: this.ticket.title,
      description: this.ticket.description
    };
    this.ticketService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.ticket = {
      title: '',
      description: '',
      status: false,
      author: ''
    };
  }

}
