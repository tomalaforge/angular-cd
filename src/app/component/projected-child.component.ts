import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../directive/base.component';
import { ButtonDirective } from '../directive/button.directive';
import { CdColorChangeDirective } from '../directive/cd-color-change.directive';
import { ChildComponent } from './child.component';

@Component({
  selector: 'projected-child',
  standalone: true,
  imports: [ButtonDirective, CdColorChangeDirective, ChildComponent],
  template: `
    {{ cdRun() }}
    <h2>Nested Child level 1</h2>
    <child>
      <h2>Nested Child level 2</h2>
      <child> <h2>Projected child from Level 1</h2></child>
    </child>
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
export class ProjectedChildComponent extends BaseDirective {}
