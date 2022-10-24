import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './component/child.component';
import { DefaultChildLevel1Component } from './component/default-child.component';
import { NestedChildLevel1Component } from './component/nested-child.component';
import { ProjectedChildComponent } from './component/projected-child.component';
import { ButtonDirective } from './directive/button.directive';
import { CdColorChangeDirective } from './directive/cd-color-change.directive';
import { AsyncParentComponent } from './stream/async/async-parent.component';
import { NgrxParentComponent } from './stream/ngrx/ngrx-parent.component';
import { RxParentComponent } from './stream/rxAngular/rx-parent.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DefaultChildLevel1Component,
    ChildComponent,
    NestedChildLevel1Component,
    ProjectedChildComponent,
    RxParentComponent,
    NgrxParentComponent,
    AsyncParentComponent,
    ButtonDirective,
    CdColorChangeDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
