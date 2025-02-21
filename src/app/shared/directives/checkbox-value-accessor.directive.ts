import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';

@Directive({
  selector: 'app-checkbox[formControlName], app-checkbox[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxValueAccessorDirective),
      multi: true,
    },
  ],
})
export class CheckboxValueAccessorDirective implements ControlValueAccessor {
  constructor(private host: CheckboxComponent) {}

  writeValue(value: any): void {
    this.host.value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.host.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.host.valueChange.subscribe(fn);
  }
}
