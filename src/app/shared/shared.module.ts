import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ],
  exports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ]
})
export class SharedModule { }
