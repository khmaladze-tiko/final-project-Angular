import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
