import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[cdRun]',
  standalone: true,
  exportAs: 'cdRun',
})
export class CdColorChangeDirective {
  @Input() color = 'bg-green-500';

  public el = inject(ElementRef);

  cdRun() {
    this.el.nativeElement.classList.add(this.color);
    this.el.nativeElement.classList.remove('bg-white', 'bg-gray-300');
    setTimeout(() => {
      this.el.nativeElement.classList.add('bg-white');
      this.el.nativeElement.classList.remove(this.color);
    }, 800);
  }
}
