import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloeLibComponent } from './aloe-lib.component';

describe('AloeLibComponent', () => {
  let component: AloeLibComponent;
  let fixture: ComponentFixture<AloeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloeLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
