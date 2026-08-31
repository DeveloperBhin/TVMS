import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="mb-4">
      <h2 class="mb-1">{{ title }}</h2>
      <p class="text-muted mb-0" *ngIf="subtitle">{{ subtitle }}</p>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
