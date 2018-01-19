import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HttpErrorService } from './http-error.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
    HttpErrorService
  ],
})
export class HttpErrorModule { }