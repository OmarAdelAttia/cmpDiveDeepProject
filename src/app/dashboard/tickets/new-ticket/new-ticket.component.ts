import { Component, ElementRef, output, viewChild } from '@angular/core';
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

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();
  enteredTitle!: string;
  enteredTextArea!: string;

  onSubmit(inputVal: string, textareaVal: string) {
    this.add.emit({ title: inputVal, text: textareaVal });
    this.form().nativeElement.reset();
  }
}
