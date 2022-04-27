import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
