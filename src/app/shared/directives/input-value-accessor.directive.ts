import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';

@Directive({
  selector: 'app-input[formControlName], app-input[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputValueAccessorDirective),
      multi: true,
    },
  ],
})
export class InputValueAccessorDirective implements ControlValueAccessor {
  constructor(private host: InputComponent) {}

  writeValue(value: any): void {
    this.host.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.host.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.host.valueChange.subscribe(fn);
  }
}
