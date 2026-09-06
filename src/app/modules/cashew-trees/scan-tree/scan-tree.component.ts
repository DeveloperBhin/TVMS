import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-scan-tree',
  templateUrl: './scan-tree.component.html',
  styleUrls: ['./scan-tree.component.scss']
})
export class ScanTreeComponent {

  treeForm: FormGroup;

  farms = [
    { id: 1, name: 'Shamba la Mbuyuni' }
  ];

  varieties = [
    { id: 1, name: 'TARI-NALIENDELE 1' },
    { id: 2, name: 'TARI-NALIENDELE 2' },
    { id: 3, name: 'TARI-NALIENDELE 4' }
  ];

  statuses = [
    'HEALTHY',
    'DISEASED',
    'DEAD'
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.treeForm = this.fb.group({

      farmId: [
        '',
        Validators.required
      ],

      plantingDate: [
        '',
        Validators.required
      ],

      varietyId: [
        '',
        Validators.required
      ],

      latitude: [
        '',
        [
          Validators.required,
          Validators.min(-90),
          Validators.max(90)
        ]
      ],

      longitude: [
        '',
        [
          Validators.required,
          Validators.min(-180),
          Validators.max(180)
        ]
      ],

      status: [
        '',
        Validators.required
      ]

    });
  }


  submitTree(): void {

    if (this.treeForm.invalid) {

      this.treeForm.markAllAsTouched();

      return;
    }

    console.log(
      'Tree registration:',
      this.treeForm.value
    );
  }
}