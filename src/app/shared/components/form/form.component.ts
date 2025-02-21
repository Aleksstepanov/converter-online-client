import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
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
export class FormComponent implements OnInit, TFormComponentProps {
  @Input() fields: TFields = [];
  @Input() data: TFormData = {};
  @Input() submitBtnTitle: string = '';
  @Input() loading: boolean = false;
  @Input() formClass: string = '';
  @Input() buttonClass: string = '';

  formGroup: FormGroup = new FormGroup({});

  initializeForm() {
    this.fields.forEach((field) => {
      const validators = field.validators || [];
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
    if (changes['data'] && !changes['data'].firstChange) {
      this.populate(this.data);
    }
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
