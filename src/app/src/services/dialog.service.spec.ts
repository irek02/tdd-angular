import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';

xdescribe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
