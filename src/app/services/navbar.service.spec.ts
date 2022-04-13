/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { ServiceApp } from './navbar.service';

describe('Service: Navbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceApp]
    });
  });

  it('should ...', inject([ServiceApp], (service: ServiceApp) => {
    expect(service).toBeTruthy();
  }));
});
