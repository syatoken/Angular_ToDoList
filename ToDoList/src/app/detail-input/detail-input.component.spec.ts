import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInputComponent } from './detail-input.component';

describe('DetailInputComponent', () => {
  let component: DetailInputComponent;
  let fixture: ComponentFixture<DetailInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
