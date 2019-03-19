import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing11Component } from './landing11.component';

describe('Landing11Component', () => {
  let component: Landing11Component;
  let fixture: ComponentFixture<Landing11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
