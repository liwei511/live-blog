import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoderComponent } from './coder.component';
import { CodeComponent } from './code/code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
const routes: Routes = [
    { path: '', component: CoderComponent, children: [
            {path: 'code/:id', component: CodeComponent}
        ]
    }
];
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CoderComponent,
        CodeComponent
    ]
})
export class CodesModule {
}
