import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { BaseDirective } from './directive/base.component';
import { CdColorChangeDirective } from './directive/cd-color-change.directive';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-xl mb-3 font-semibold">
      ZoneLess Application to understand how CD works and propagates
    </h1>
    <section class="mb-2">
      <span app-button>MfC</span>: MarkForCheck <span app-button>DC</span>:
      DetectChanges <span app-button>D</span>: Detach
      <span app-button>RA</span>: ReAttach
    </section>
    <div class="grid grid-cols-2 w-full h-full mb-2 gap-3">
      {{ cdRun() }}
      <default-child-level-1 color="bg-yellow-500"></default-child-level-1>
      <nested-child-level-1 color="bg-orange-500"></nested-child-level-1>
      <projected-child></projected-child>
      <rx-parent color="bg-blue-500"></rx-parent>
      <async-parent color="bg-purple-500"></async-parent>
      <ngrx-parent color="bg-pink-500"></ngrx-parent>
    </div>
    <footer>
      <button app-button (click)="triggerMarkForCheck()">MfC</button>
      <button app-button (click)="triggerDetectChanges()">DC</button>
      <button app-button (click)="nextTick()">Tick</button>
    </footer>
  `,
  host: {
    class: 'flex flex-col justify-center items-center  p-2',
    color: 'bg-red-500',
  },
  hostDirectives: [CdColorChangeDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseDirective implements OnInit {
  private appRef = inject(ApplicationRef);

  ngOnInit(): void {
    this.cdRunDirective.color = 'bg-gray-500';
  }

  nextTick() {
    this.appRef.tick();
  }
}
