import { Directive, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Optional base class for pages that need common routing helpers.
 * Keep this class small; feature-specific logic belongs in feature components/services.
 */
@Directive()
export abstract class BaseComponent {
  protected readonly router = inject(Router);
  protected readonly route = inject(ActivatedRoute);
}
