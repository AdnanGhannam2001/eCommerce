import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDownComponent, TimePipe } from './time-down/time-down.component';



@NgModule({
  declarations: [
    TimeDownComponent,
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeDownComponent
  ]
})
export class UiComponentsModule { }
