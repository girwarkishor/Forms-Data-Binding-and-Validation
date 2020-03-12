import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrderSheetComponent } from './order-sheet/order-sheet.component';
import { DebugPanelComponent } from './debug-panel/debug-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, OrderSheetComponent, DebugPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
