import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatresComponent } from './paginatres.component';

describe('PaginatresComponent', () => {
  let component: PaginatresComponent;
  let fixture: ComponentFixture<PaginatresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
