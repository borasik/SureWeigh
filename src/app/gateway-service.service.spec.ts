import { TestBed, inject } from '@angular/core/testing';

import { GatewayServiceService } from './gateway-service.service';

describe('GatewayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GatewayServiceService]
    });
  });

  it('should be created', inject([GatewayServiceService], (service: GatewayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
