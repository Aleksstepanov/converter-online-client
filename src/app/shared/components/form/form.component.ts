import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TFormData, TFormComponentProps } from './types';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { TFields } from '@shared/types';
import { InputValueAccessorDirective } from '@shared/directives/input-value-accessor.directive';
import { CheckboxValueAccessorDirective } from '@shared/directives/checkbox-value-accessor.directive';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    InputValueAccessorDirective,
    CheckboxValueAccessorDirective,
    NgClass,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent<T> implements OnInit, TFormComponentProps {
  @Input() fields: TFields = [];
  @Input() data: TFormData = {};
  @Input() submitBtnTitle: string = '';
  @Input() loading: boolean | null = false;
  @Input() formClass: string = '';
  @Input() buttonClass: string = '';

  @Output() payload: EventEmitter<T> = new EventEmitter();

  public formGroup: FormGroup = new FormGroup({});

  getErrorMessage(fieldName: string): string {
    const control = this.formGroup.get(fieldName);
    if (!control || control.valid || !control.touched) return '';

    if (control.hasError('required')) {
      return 'Это поле обязательно!';
    }

    if (control.hasError('email')) {
      return 'Некорректный email!';
    }

    if (control.hasError('minlength')) {
      return `Минимальная длина: ${control.errors?.['minlength'].requiredLength} символов`;
    }

    return 'Некорректное значение';
  }

  initializeForm() {
    this.formGroup = new FormGroup({});

    this.fields.forEach((field) => {
      const validators = field.validators
        ? Validators.compose(field.validators)
        : null;
      const value = this.data[field.name] || '';

      this.formGroup.addControl(field.name, new FormControl(value, validators));
    });
  }

  populate(data: TFormData) {
    Object.keys(data).forEach((key) => {
      if (this.formGroup.controls[key]) {
        this.formGroup.controls[key].setValue(data[key]);
      }
    });
  }

  ngOnInit() {
    this.initializeForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fields'] && !changes['fields'].firstChange) {
      this.initializeForm();
    }
    if (changes['data'] && !changes['data'].firstChange) {
      this.populate(this.data);
    }
  }

  onSubmit() {
    if (!this.formGroup.invalid) {
      this.payload.emit(this.formGroup.value as T);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
