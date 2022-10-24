import { ChangeDetectorRef, Directive, inject } from '@angular/core';
import { CdColorChangeDirective } from './cd-color-change.directive';

@Directive({})
export abstract class BaseDirective {
  protected cdRunDirective = inject(CdColorChangeDirective);
  private cdr = inject(ChangeDetectorRef);

  cdRun() {
    this.cdRunDirective.cdRun();
  }

  triggerMarkForCheck() {
    this.cdr.markForCheck();
    this.cdRunDirective.el.nativeElement.classList.add('bg-gray-300');
  }

  triggerDetectChanges() {
    this.cdr.detectChanges();
  }
  detach() {
    this.cdr.detach();
  }
  attach() {
    this.cdr.reattach();
    this.cdRunDirective.el.nativeElement.classList.add('bg-gray-300');
  }
}
