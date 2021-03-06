import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { Service } from './service/app.service';
import { ToolService } from './service/tool.service';

registerLocaleData(zh);

const routes: Routes = [
  {path: '', redirectTo: 'article', pathMatch: 'full'},
  {path: 'article', loadChildren: './components/article/article.module#ArticleModule'},
  {path: 'coder', loadChildren: './components/coder/coder.module#CoderModule'},
  {path: 'multimedia', loadChildren: './components/multimedia/multimedia.module#MultimediaModule'},
  {path: '**', redirectTo: 'article'},
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, Service, ToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
