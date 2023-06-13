import { TestBed } from '@angular/core/testing';

import { ImageCarrouselService } from '../../shared/services/image-carrousel.service';

describe('ImageCarrouselService', () => {
  let service: ImageCarrouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCarrouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
