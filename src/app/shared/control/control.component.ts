import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, OnInit, ViewEncapsulation, contentChild, input } from '@angular/core';

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
export class ControlComponent implements OnInit, AfterContentInit {

  // @HostBinding('class') className = 'control';

  // @HostListener('click') onClick() {
  //   console.log(`Welcome from Control Component`);
  // }

  // @ContentChild('input') private ctr?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private ctr = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input.required<string>();

  ngOnInit(): void {
    console.log(`OnInit`);
    // console.log(this.ctr?.nativeElement);
    console.log(this.ctr().nativeElement);
  }

  ngAfterContentInit(): void {
    console.log(`AfterContentInit`);
    // console.log(this.ctr?.nativeElement);
    console.log(this.ctr().nativeElement);
  }

  onClick() {
    console.log(`Welcome from Control Component`);
    // console.log(this.ctr);
    console.log(this.ctr());
  }

}
