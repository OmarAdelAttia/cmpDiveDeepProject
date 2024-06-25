import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
  imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChild(ControlComponent) ctr?: ElementRef<ControlComponent>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log(`OnInit`);
    // console.log(this.form?.nativeElement);
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(): void {
    console.log(`AfterViewInit`);
    // console.log(this.form?.nativeElement);
    console.log(this.form().nativeElement);
  }

  onSubmit(inputEl: HTMLInputElement, textareaVal: string) {
    console.log(inputEl.value, textareaVal)
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
