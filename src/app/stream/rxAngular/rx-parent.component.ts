import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetModule } from '@rx-angular/template/let';
import { BehaviorSubject, take, tap, timer } from 'rxjs';
import { BaseDirective } from 'src/app/directive/base.component';
import { ButtonDirective } from 'src/app/directive/button.directive';
import { CdColorChangeDirective } from 'src/app/directive/cd-color-change.directive';
import { StreamChildComponent } from '../stream-child.component';

@Component({
  selector: 'rx-parent',
  standalone: true,
  imports: [
    StreamChildComponent,
    ButtonDirective,
    LetModule,
    CdColorChangeDirective,
  ],
  template: `
    {{ cdRun() }}
    <h2>RxLet from @rx-angular/template</h2>
    <div class="flex w-full gap-4 justify-around">
      <section
        class="border-2 border-dashed w-full p-4"
        *rxLet="count1$ as count1"
        cdRun
        color="bg-blue-500"
        #cdRunSection1="cdRun"
      >
        {{ cdRunSection1.cdRun() }}
        <div>Section inside parent - count1 = {{ count1 }}</div>
        <stream-child [count]="count1" color="bg-blue-300"></stream-child>
        <button app-button (click)="addCount1()">Count1</button>
      </section>
      <section
        class="border-2 border-dashed w-full p-4"
        *rxLet="count2$ as count2"
        cdRun
        color="bg-blue-500"
        #cdRunSection2="cdRun"
      >
        {{ cdRunSection2.cdRun() }}
        <div>Section inside parent - count2 = {{ count2 }}</div>
        <stream-child [count]="count2" color="bg-blue-300"></stream-child>
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
export class RxParentComponent extends BaseDirective {
  private count1$$ = new BehaviorSubject<number>(1);
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
