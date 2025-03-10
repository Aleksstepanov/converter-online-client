import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IInputProps } from './types';
import { NgClass, NgIf } from '@angular/common';
import { RequiredIconComponent } from '@shared/components/required-icon/required-icon.component';

@Component({
  selector: 'app-input',
  imports: [NgIf, NgClass, RequiredIconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  standalone: true,
})
export class InputComponent implements IInputProps {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder?: string = '';
  @Input() typeInput: string = 'text';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'input' = 'input';
  @Input() name: string = '';
  @Input() isRequired?: boolean = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
