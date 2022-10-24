import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../directive/base.component';
import { ButtonDirective } from '../directive/button.directive';
import { CdColorChangeDirective } from '../directive/cd-color-change.directive';

@Component({
  selector: 'default-child-level-2',
  standalone: true,
  imports: [ButtonDirective, CdColorChangeDirective],
  template: `
    {{ cdRun() }}
    <h2>Child level 2 on Default Strategy</h2>
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
    class: 'block  border-2 border-gray-500 p-2 ',
  },
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaulChildLevel2Component extends BaseDirective {}

@Component({
  selector: 'default-child-level-1',
  standalone: true,
  imports: [
    ButtonDirective,
    CdColorChangeDirective,
    DefaulChildLevel2Component,
  ],
  template: `
    {{ cdRun() }}
    <h2>Child level 1 on Default Strategy</h2>
    <default-child-level-2 color="bg-yellow-300"></default-child-level-2>
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
    class: 'block  border-2 border-gray-500 p-2 ',
  },
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultChildLevel1Component extends BaseDirective {}
