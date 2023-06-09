import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchServerComponent } from './search-server.component';

describe('SearchServerComponent', () => {
  let component: SearchServerComponent;
  let fixture: ComponentFixture<SearchServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
