import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    class: 'control'
  }
})
export class ControlComponent {

  label = input.required<string>();

}
