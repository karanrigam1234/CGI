import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { KeepnotesComponent } from './keepnotes/keepnotes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KeepnotesComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatDividerModule, MatCardModule, MatProgressBarModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
