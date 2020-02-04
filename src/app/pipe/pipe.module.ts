import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumHidePipe } from './card-num-hide.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardNumHidePipe],
  exports:[
    CardNumHidePipe
  ]
})
export class PipeModule { }