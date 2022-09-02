import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTicket: Ticket = {
    title: '',
    description: '',
    published: false
  };

  message = '';
  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTicket(this.route.snapshot.params["id"]);
    }
  }
  getTicket(id: string): void {
    this.ticketService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTicket = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTicket.title,
      description: this.currentTicket.description,
      status: status
    };
    this.message = '';
    this.ticketService.update(this.currentTicket.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTicket.status = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateTicket(): void {
    this.message = '';
    this.ticketService.update(this.currentTicket.id, this.currentTicket)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This ticket was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteTicket(): void {
    this.ticketService.delete(this.currentTicket.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/ticket']);
        },
        error: (e) => console.error(e)
      });
  }
}
