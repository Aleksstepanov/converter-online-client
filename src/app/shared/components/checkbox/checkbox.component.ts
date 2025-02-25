import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICheckboxProps } from './types';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent implements ICheckboxProps {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder?: string = '';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'checkbox' = 'checkbox';
  @Input() name: string = '';

  @Output() valueChange: EventEmitter<boolean> = new EventEmitter();

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(!!target.value);
  }
}
