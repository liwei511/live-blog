import { Component } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent {
  title = 'live-blog';
  tabs = [
      {label: '相片', value: 'photos'},
      {label: '视频', value: 'videos'},
      {label: '音乐', value: 'autios'},
  ];
  tabIndex = 0;
  onTabChange(i) {
    this.tabIndex = i;
}
}
