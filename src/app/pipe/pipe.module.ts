import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumHidePipe } from './card-num-hide.pipe';
import { GreetPipe } from './greet.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardNumHidePipe, GreetPipe],
  exports:[
    CardNumHidePipe,GreetPipe
  ]
})
export class PipeModule { }