/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetSeriesService } from './getSeries.service';

describe('Service: GetSeries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSeriesService]
    });
  });

  it('should ...', inject([GetSeriesService], (service: GetSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
