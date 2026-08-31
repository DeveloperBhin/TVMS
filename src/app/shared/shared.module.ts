import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { FormComponent } from './components/form/form.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    FormComponent,
    ActionButtonsComponent,
    ImageSliderComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    FormComponent,
    ActionButtonsComponent,
    ImageSliderComponent,
    PageHeaderComponent,
    TranslateModule
  ]
})
export class SharedModule {}
