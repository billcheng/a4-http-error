import { HttpErrorService } from './http-error.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private httpErrorService: HttpErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next
      .handle(req)
      .catch((e, caught) => {
        console.log(e);
        if (e instanceof HttpErrorResponse) {
          this.httpErrorService.call(e);
        }
        return Observable.throw(e);
      });
  }

}
