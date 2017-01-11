/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LevelRatesService } from './level-rates.service';

describe('LevelRatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LevelRatesService]
    });
  });

  it('should ...', inject([LevelRatesService], (service: LevelRatesService) => {
    expect(service).toBeTruthy();
  }));
});
