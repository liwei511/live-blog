import { Component, Injectable, NgZone } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class ToolService {
    constructor(private datePipe: DatePipe) {}
    // 格式化时间
    formatDate(date, flag?: Number) {
        if (date) {
            switch (flag) {
                case 0:
                    return this.datePipe.transform(date, 'yyyy');
                case 1:
                    return this.datePipe.transform(date, 'yyyy-MM');
                case 3:
                    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
                default:
                    return this.datePipe.transform(date, 'yyyy-MM-dd');
            }
        } else {
            return null;
        }
    }
}
