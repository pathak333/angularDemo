import { TestBed } from '@angular/core/testing';

import { HttptrackInterceptor } from './httptrack.interceptor';

describe('HttptrackInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttptrackInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttptrackInterceptor = TestBed.inject(HttptrackInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
