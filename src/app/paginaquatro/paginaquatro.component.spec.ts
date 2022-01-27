import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaquatroComponent } from './paginaquatro.component';

describe('PaginaquatroComponent', () => {
  let component: PaginaquatroComponent;
  let fixture: ComponentFixture<PaginaquatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaquatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaquatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
