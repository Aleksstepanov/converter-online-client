import { Component, Input } from '@angular/core';
import { IRadioProps } from './types';

@Component({
  selector: 'app-radio',
  imports: [],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
})
export class RadioComponent implements IRadioProps {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder?: string = '';
  @Input() typeInput: string = 'text';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'radio' = 'radio';
  @Input() name: string = '';
}
