import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoMainComponent } from './producto-main/producto-main.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductoMainComponent,
    ProductoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ProductoMainComponent,
    ProductoFormComponent
  ]
})
export class ProductoModule { }
