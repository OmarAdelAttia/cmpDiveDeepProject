import { Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, contentChild, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {

  // @HostBinding('class') className = 'control';

  // @HostListener('click') onClick() {
  //   console.log(`Welcome from Control Component`);
  // }

  // @ContentChild('input') private ctr?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private ctr = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input.required<string>();

  onClick() {
    console.log(`Welcome from Control Component`);
    console.log(this.ctr());
  }

}
