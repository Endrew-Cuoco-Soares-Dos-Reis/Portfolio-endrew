import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoisComponent } from './paginadois.component';

describe('PaginadoisComponent', () => {
  let component: PaginadoisComponent;
  let fixture: ComponentFixture<PaginadoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
