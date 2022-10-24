import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { BehaviorSubject, take, tap, timer } from 'rxjs';
import { BaseDirective } from 'src/app/directive/base.component';
import { ButtonDirective } from 'src/app/directive/button.directive';
import { CdColorChangeDirective } from 'src/app/directive/cd-color-change.directive';
import { StreamChildComponent } from '../stream-child.component';

@Component({
  selector: 'ngrx-parent',
  standalone: true,
  imports: [
    LetModule,
    ButtonDirective,
    CdColorChangeDirective,
    StreamChildComponent,
  ],
  template: `
    {{ cdRun() }}
    <h2>NgrxLet from @ngrx/component</h2>
    <div class="flex w-full gap-4 justify-around">
      <section
        class="border-2 border-dashed w-full p-4"
        *ngrxLet="count1$ as count1"
        cdRun
        color="bg-pink-500"
        #cdRunSection1="cdRun"
      >
        {{ cdRunSection1.cdRun() }}
        <div>Section inside parent - count1 = {{ count1 }}</div>
        <stream-child [count]="count1" color="bg-pink-300"></stream-child>
        <button app-button (click)="addCount1()">Count1</button>
      </section>
      <section
        class="border-2 border-dashed w-full p-4"
        *ngrxLet="count2$ as count2"
        cdRun
        color="bg-pink-500"
        #cdRunSection2="cdRun"
      >
        {{ cdRunSection2.cdRun() }}
        <div>Section inside parent - count2 = {{ count2 }}</div>
        <stream-child [count]="count2" color="bg-pink-300"></stream-child>
        <button app-button (click)="addCount2()">Count2</button>
      </section>
    </div>
    <button app-button (click)="triggerMarkForCheck()">MfC</button>
    <button app-button (click)="triggerDetectChanges()">DC</button>
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
export class NgrxParentComponent extends BaseDirective {
  private count1$$ = new BehaviorSubject<number>(1); // must start at 1 for ngIf to be visible
  count1$ = this.count1$$.asObservable();
  private count2$$ = new BehaviorSubject<number>(1);
  count2$ = this.count2$$.asObservable();

  addCount1() {
    timer(0, 1200)
      .pipe(
        take(3),
        tap(() => this.count1$$.next(this.count1$$.value + 1))
      )
      .subscribe();
  }
  addCount2() {
    timer(0, 1200)
      .pipe(
        take(3),
        tap(() => this.count2$$.next(this.count2$$.value + 1))
      )
      .subscribe();
  }
}
