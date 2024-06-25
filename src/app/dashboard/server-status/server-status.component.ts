import { Component, OnInit } from '@angular/core';

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
export class ServerStatusComponent implements OnInit {

  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   const randomNum = Math.random();
    //   if (randomNum < .4) {
    //     this.currentStatus = 'online';
    //   } else if (randomNum < .8) {
    //     this.currentStatus = 'offline';
    //   } else {
    //     this.currentStatus = 'unknown';
    //   }
    // }, 5000);
  }

}
