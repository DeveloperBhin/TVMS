import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { TranslateModule } from '@ngx-translate/core';

import { FormComponent } from './components/form/form.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SidebarComponent } from '../libs/components/sidebar/sidebar.component';
import { HeaderComponent } from '../libs/components/header/header.component';
@NgModule({
  declarations: [
    FormComponent,
    ActionButtonsComponent,
    ImageSliderComponent,
    PageHeaderComponent,
    SidebarComponent,
    HeaderComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

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
    RouterModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,

    TranslateModule,

    FormComponent,
    ActionButtonsComponent,
    ImageSliderComponent,
    PageHeaderComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule {}