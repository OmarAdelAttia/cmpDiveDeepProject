import { Component, DestroyRef, OnInit, effect, inject, signal } from '@angular/core';

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

  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
      console.log(`effect function works with signal whenever the signal changes it fires`);
    });
  }

  ngOnInit(): void {
    // console.log(`OnInit`);
    // // The interval throw error due to the time
    // const interval = setInterval(() => {
    //   const randomNum = Math.random();
    //   if (randomNum < .4) {
    //     this.currentStatus.set('online');
    //   } else if (randomNum < .8) {
    //     this.currentStatus.set('offline');
    //   } else {
    //     this.currentStatus.set('unknown');
    //   }
    // }, 5000);
    // this.destroyRef.onDestroy(() => {
    //   clearInterval(interval);
    // });
  }

}
