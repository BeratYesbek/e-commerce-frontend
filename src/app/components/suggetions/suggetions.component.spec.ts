import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggetionsComponent } from './suggetions.component';

describe('SuggetionsComponent', () => {
  let component: SuggetionsComponent;
  let fixture: ComponentFixture<SuggetionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggetionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
