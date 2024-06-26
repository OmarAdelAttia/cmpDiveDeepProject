import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {

  openTicket = output();
  closeTicket = output();
  detailsVisable = signal(false);
  ticketData = input.required<Ticket>();

  onToggleDetails() {
    this.detailsVisable.update((wasVisable) => !wasVisable);
  }

  onMarkAsCompleted() {
    this.closeTicket.emit();
  }

  onMarkAsReturned() {
    this.openTicket.emit();
  }

}
