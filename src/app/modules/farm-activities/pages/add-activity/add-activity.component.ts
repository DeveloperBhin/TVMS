import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent {

  activityForm: FormGroup;

  farms = [
    {
      id: 1,
      name: 'Shamba la Mbuyuni'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.activityForm = this.fb.group({

      activityType: [
        '',
        Validators.required
      ],

      farmId: [
        '',
        Validators.required
      ],

      cost: [
        '',
        Validators.required
      ],

      date: [
        '',
        Validators.required
      ],

      description: [
        '',
        Validators.required
      ],

      amountHarvested: [
        ''
      ]

    });

  }


  submitActivity(): void {

    if (this.activityForm.invalid) {

      this.activityForm.markAllAsTouched();

      return;
    }

    console.log(
      'Activity:',
      this.activityForm.value
    );

  }

}