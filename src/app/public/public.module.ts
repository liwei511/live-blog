import {CommonModule} from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  exports: [
    MenuComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class PublicModule { }
