import { Component, ElementRef, EventEmitter, output, Output, signal, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form')

  enteredTitle = signal('');
  enteredTextarea = signal('');

  // @Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{title: string, request: string}>();

  onSubmit() {
    this.add.emit({title: this.enteredTitle(), request: this.enteredTextarea()});

    // this.form()?.nativeElement.reset();
    this.enteredTitle.set('');
    this.enteredTextarea.set('');
  }
}
