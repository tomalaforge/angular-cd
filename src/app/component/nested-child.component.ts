import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../directive/base.component';
import { ButtonDirective } from '../directive/button.directive';
import { CdColorChangeDirective } from '../directive/cd-color-change.directive';
import { ChildComponent } from './child.component';

@Component({
  selector: 'nested-child-level-2',
  standalone: true,
  imports: [ChildComponent, ButtonDirective, CdColorChangeDirective],
  template: `
    {{ cdRun() }}
    <h2>nested child level 2</h2>
    <child color="bg-orange-100">
      <h2>nested child level 3</h2>
    </child>
    <button app-button (click)="triggerMarkForCheck()">MfC</button>
    <button app-button (click)="triggerDetectChanges()">DC</button>
    <button app-button (click)="detach()">D</button>
    <button app-button (click)="attach()">RA</button>
  `,
  host: {
    class: 'block  border-2 border-gray-500 p-2',
  },
  hostDirectives: [
    {
      directive: CdColorChangeDirective,
      inputs: ['color'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedChildLevel2Component extends BaseDirective {}

@Component({
  selector: 'nested-child-level-1',
  standalone: true,
  imports: [
    NestedChildLevel2Component,
    ButtonDirective,
    CdColorChangeDirective,
  ],
  template: `
    {{ cdRun() }}
    <h2>nested child level 1</h2>
    <nested-child-level-2 color="bg-orange-300"></nested-child-level-2>
    <button app-button (click)="triggerMarkForCheck()">MfC</button>
    <button app-button (click)="triggerDetectChanges()">DC</button>
    <button app-button (click)="detach()">D</button>
    <button app-button (click)="attach()">RA</button>
  `,
  host: {
    class: 'block  border-2 border-gray-500 p-2',
  },
  hostDirectives: [
    {
      directive: CdColorChangeDirective,
      inputs: ['color'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedChildLevel1Component extends BaseDirective {}
