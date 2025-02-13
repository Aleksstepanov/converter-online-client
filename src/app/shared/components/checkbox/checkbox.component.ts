import { Component, Input } from '@angular/core';
import { ICheckboxProps } from './types';
import { EInputTypeAttributes } from '@shared/components/input/types';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent implements ICheckboxProps {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder?: string = '';
  @Input() typeInput: EInputTypeAttributes = EInputTypeAttributes.CHECKBOX;
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'checkbox' = 'checkbox';
  @Input() name: string = '';
}
