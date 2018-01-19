/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpErrorService } from './http-error.service';

describe('Service: HttpError', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorService]
    });
  });

  it('should ...', inject([HttpErrorService], (service: HttpErrorService) => {
    expect(service).toBeTruthy();
  }));
});