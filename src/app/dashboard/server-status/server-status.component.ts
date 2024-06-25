import { Component, input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
  host: {
    id: 'status'
  }
})
export class ServerStatusComponent {

  currentStatus = 'online';

}
