import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PublicModule } from '../../public/public.module';
const routes: Routes = [
    { path: '', component: ArticleComponent, children: [
            {path: 'details/:id', component: DetailsComponent}
        ]
    }
];
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        PublicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ArticleComponent,
        DetailsComponent
    ],
    schemas: []
})
export class ArticleModule {
}
