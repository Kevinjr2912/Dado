import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputProvideValueComponent } from './input-provide-value/input-provide-value.component';
import { ListInputsComponent } from './list-inputs/list-inputs.component';
import { FormsModule } from '@angular/forms';
import { ContainerInputButtonComponent } from './container-input-button/container-input-button.component';

@NgModule({
  declarations: [
    InputProvideValueComponent,
    ListInputsComponent,
    ContainerInputButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
     ContainerInputButtonComponent,
     ListInputsComponent
  ]
})
export class DadosModule { }
