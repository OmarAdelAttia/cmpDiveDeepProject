import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
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
export class NewTicketComponent {

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChild(ControlComponent) ctr?: ElementRef<ControlComponent>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(inputEl: HTMLInputElement, textareaVal: string) {
    console.log(inputEl.value, textareaVal)
    console.log(`Submit`);
    this.form().nativeElement.reset();
  }
}
