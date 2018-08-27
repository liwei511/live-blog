import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MultimediaComponent } from './multimedia.component';
import { AudiosComponent } from './audios/audios.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
const routes: Routes = [
    { path: '', component: MultimediaComponent, children: [
            {path: 'audios', component: AudiosComponent},
            {path: 'photos', component: PhotosComponent},
            {path: 'videos', component: VideosComponent},
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
        MultimediaComponent,
        AudiosComponent,
        PhotosComponent,
        VideosComponent
    ]
})
export class MultimediaModule {
}
