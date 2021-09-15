import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterChildComponent } from './counter-child.component';

describe('CounterChildComponent', () => {
  let component: CounterChildComponent;
  let fixture: ComponentFixture<CounterChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
