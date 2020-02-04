import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {PipeModule} from './pipe/pipe.module'
import { AppComponent } from './app.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,PipeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
