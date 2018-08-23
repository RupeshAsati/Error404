import { TestBed, inject } from '@angular/core/testing';

import { Error404ServicesService } from './error404-services.service';

describe('Error404ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Error404ServicesService]
    });
  });

  it('should be created', inject([Error404ServicesService], (service: Error404ServicesService) => {
    expect(service).toBeTruthy();
  }));
});
