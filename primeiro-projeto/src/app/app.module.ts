import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { DataBindingComponent } from './data-binding/data-binding/data-binding.component';
import { FormsModule } from "@angular/forms";
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertiesComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
