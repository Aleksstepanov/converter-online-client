import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TInputProps, EInputTypeAttributes } from './types';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-input',
  imports: [NgIf, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  standalone: true,
})
export class InputComponent implements TInputProps {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = 'Введите текст';
  @Input() type: EInputTypeAttributes = EInputTypeAttributes.TEXT;
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
