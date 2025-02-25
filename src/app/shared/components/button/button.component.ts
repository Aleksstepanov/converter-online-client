import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TButtonProps } from './types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [NgClass],
})
export class ButtonComponent implements TButtonProps {
  @Input() label: string = '';
  @Input() disabled?: boolean = false;
  @Input() type?: 'primary' | 'secondary' = 'primary';
  @Input() buttonClass: string = '';
  @Input() htmlType: 'submit' | 'button' = 'submit';

  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
