import { Component, Input } from '@angular/core';
import { ISelectProps } from './types';
import { TSelectOptions } from '@shared/types';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent implements ISelectProps {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder?: string = '';
  @Input() typeInput: string = 'text';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'select' = 'select';
  @Input() name: string = '';
  @Input() options: TSelectOptions = [];
}
