import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type ErrorCallBack = (event: HttpErrorResponse) => void;

@Injectable()
export class HttpErrorService {

    map = new Map<number, ErrorCallBack[]>();

    public call(event: HttpErrorResponse) {
        const callBacks = this.map.get(event.status);

        if (callBacks) {
            callBacks.forEach(p => p(event));
        }
    }

    public push(statusCode: number, callBack: ErrorCallBack) {
        const arr = this.map.get(statusCode);
        const newArr = !!arr ? [...arr, callBack] : [callBack];
        this.map.set(statusCode, newArr);
    }

    public pop(statusCode) {
        const arr = this.map.get(statusCode);
        const newArr = !!arr ? [...arr.slice(0, arr.length - 1)] : [];
        this.map.set(statusCode, newArr);
    }

}
