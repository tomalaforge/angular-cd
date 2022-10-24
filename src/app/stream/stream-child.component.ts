import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChildComponent } from '../component/child.component';
import { BaseDirective } from '../directive/base.component';
import { ButtonDirective } from '../directive/button.directive';
import { CdColorChangeDirective } from '../directive/cd-color-change.directive';

@Component({
  selector: 'stream-child',
  standalone: true,
  imports: [
    ChildComponent,
    ButtonDirective,
    CdColorChangeDirective,
    ChildComponent,
  ],
  template: `
    {{ cdRun() }}
    <h2>Child with inputs</h2>
    <div>Count {{ count }}</div>
    <child><h2>Nested Child</h2></child>
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
export class StreamChildComponent extends BaseDirective {
  @Input() count = 0;
}
