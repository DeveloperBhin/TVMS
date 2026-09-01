import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add_farm_success',
  templateUrl: './add_farm_sucess.component.html',
  styleUrls: ['./add_farm_sucess.component.scss']
})
export class AddFarmSucessComponent {

  farmForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.farmForm = this.fb.group({

      farmName: [
        '',
      ],

   

     

    

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