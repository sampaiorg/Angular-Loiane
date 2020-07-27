import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBadgeModule } from "@angular/material/badge";
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    OperadorElvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
