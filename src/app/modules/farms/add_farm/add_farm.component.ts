import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add_farm',
  templateUrl: './add_farm.component.html',
  styleUrls: ['./add_farm.component.scss']
})
export class AddFarmComponent {

  farmForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.farmForm = this.fb.group({

      farmName: [
        '',
        Validators.required
      ],

      plantingDate: [
        '',
        Validators.required
      ],

      farmType: [
        '',
        Validators.required
      ],

      farmSize: [
        '',
        [
          Validators.required,
          Validators.min(0.1)
        ]
      ]

    });

  }


  submitFarm(): void {

    if (this.farmForm.invalid) {

      this.farmForm.markAllAsTouched();

      return;
    }

    console.log(
      'Farm:',
      this.farmForm.value
    );

  }
}