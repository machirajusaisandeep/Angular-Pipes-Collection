import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumHidePipe } from './card-num-hide.pipe';
import { GreetPipe } from './greet.pipe';
import { RemoveUnderScorePipe } from './remove-under-score.pipe';
import { StartCasePipe } from './start-case.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardNumHidePipe, GreetPipe, RemoveUnderScorePipe, StartCasePipe],
  exports:[
    CardNumHidePipe,GreetPipe,RemoveUnderScorePipe,StartCasePipe
  ]
})
export class PipeModule { }