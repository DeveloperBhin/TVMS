import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormParameters } from '../../models/form-parameters.model';
import { FieldType } from '../dynamic-forms-components/field.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() fp!: FormParameters<any>;

  form!: FormGroup;
  readonly FieldType = FieldType;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    if (!this.fp) return;

    const controls: Record<string, any> = {};
    for (const field of this.fp.fields) {
      if (field.type === FieldType.button) continue;
      controls[field.key] = ['', field.required ? [Validators.required] : []];
    }
    this.form = this.fb.group(controls);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.fp.onSubmit(this.form.getRawValue());
  }
}
