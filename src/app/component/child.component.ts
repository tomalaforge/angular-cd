import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../directive/base.component';
import { ButtonDirective } from '../directive/button.directive';
import { CdColorChangeDirective } from '../directive/cd-color-change.directive';

@Component({
  selector: 'child',
  standalone: true,
  imports: [ButtonDirective, CdColorChangeDirective],
  template: `
    {{ cdRun() }}
    <ng-content select="h2"></ng-content>
    <ng-content></ng-content>
    <button app-button (click)="triggerMarkForCheck()">MfC</button>
    <button app-button (click)="triggerDetectChanges()">DC</button>
    <button app-button (click)="detach()">D</button>
    <button app-button (click)="attach()">RA</button>
  `,
  hostDirectives: [
    {
      directive: CdColorChangeDirective,
      inputs: ['color'],
    },
  ],
  host: {
    class: 'block  border-2 border-gray-500 p-2',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent extends BaseDirective {}
