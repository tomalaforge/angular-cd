import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-button]',
  standalone: true,
})
export class ButtonDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add(
      'px-2',
      'py-1',
      'rounded-md',
      'border',
      'border-blue-500',
      'bg-blue-100',
      'w-fit',
      'm-2'
    );
  }
}
