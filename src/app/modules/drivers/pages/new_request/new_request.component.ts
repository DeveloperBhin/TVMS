import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new_request',
  templateUrl: './new_request.component.html',
  styleUrls: ['./new_request.component.scss']
})
export class NewRequestComponent {

  // =========================
  // SIDEBAR
  // =========================
  sidebarOpen = false;


  // =========================
  // FORM
  // =========================
  requestForm: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {

    this.requestForm = this.fb.group({

      // Assigned vehicle
      vehicle: [
        'STK 4492 - Toyota Land Cruiser Prado (TARI Makutupora)',
        Validators.required
      ],

      // Service / maintenance type
      serviceType: [
        '',
        Validators.required
      ],

      // Current vehicle mileage
      currentMileage: [
        142850,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      // Reason / maintenance description
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],

      // Estimated maintenance cost
      estimatedCost: [
        null,
        [
          Validators.min(0)
        ]
      ]

    });

  }


  // =========================
  // SUBMIT REQUEST
  // =========================
  submitRequest(): void {

    if (this.requestForm.invalid) {

      this.requestForm.markAllAsTouched();

      return;

    }

    const formValue = this.requestForm.getRawValue();

    const request = {

      vehicle: formValue.vehicle,

      serviceType: formValue.serviceType,

      currentMileage: Number(
        formValue.currentMileage
      ),

      description:
        formValue.description?.trim(),

      estimatedCost:
        formValue.estimatedCost !== null &&
        formValue.estimatedCost !== ''
          ? Number(formValue.estimatedCost)
          : null

    };


    console.log(
      'Maintenance Request:',
      request
    );


    // =========================
    // API CALL WILL GO HERE
    // =========================

    /*
    this.maintenanceService
      .createRequest(request)
      .subscribe({

        next: (response) => {

          console.log(
            'Request submitted successfully:',
            response
          );

        },

        error: (error) => {

          console.error(
            'Failed to submit request:',
            error
          );

        }

      });
    */

  }


  // =========================
  // FIELD VALIDATION
  // =========================
  isFieldInvalid(
    fieldName: string
  ): boolean {

    const field =
      this.requestForm.get(fieldName);

    return !!(
      field &&
      field.touched &&
      field.invalid
    );

  }


  // =========================
  // RESET FORM
  // =========================
  resetForm(): void {

    this.requestForm.reset({

      vehicle:
        'STK 4492 - Toyota Land Cruiser Prado (TARI Makutupora)',

      serviceType: '',

      currentMileage: 142850,

      description: '',

      estimatedCost: null

    });

  }


  // =========================
  // SIDEBAR
  // =========================
  toggleSidebar(): void {

    this.sidebarOpen =
      !this.sidebarOpen;

  }


  closeSidebar(): void {

    this.sidebarOpen = false;

  }

}