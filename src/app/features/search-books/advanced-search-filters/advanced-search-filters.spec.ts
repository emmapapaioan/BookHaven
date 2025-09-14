import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchFilters } from './advanced-search-filters';

describe('SearchFilters', () => {
  let component: AdvancedSearchFilters;
  let fixture: ComponentFixture<AdvancedSearchFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedSearchFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedSearchFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
