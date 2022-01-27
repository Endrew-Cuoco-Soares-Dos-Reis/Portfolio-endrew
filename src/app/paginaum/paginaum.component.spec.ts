import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaumComponent } from './paginaum.component';

describe('PaginaumComponent', () => {
  let component: PaginaumComponent;
  let fixture: ComponentFixture<PaginaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
