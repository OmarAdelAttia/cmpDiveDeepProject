import { Component, HostBinding, HostListener, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()'
  }
})
export class ControlComponent {

  // @HostBinding('class') className = 'control';

  // @HostListener('click') onClick() {
  //   console.log(`Welcome from Control Component`);
  // }

  label = input.required<string>();

  // onClick() {
  //   console.log(`Welcome from Control Component`);
  // }

}
