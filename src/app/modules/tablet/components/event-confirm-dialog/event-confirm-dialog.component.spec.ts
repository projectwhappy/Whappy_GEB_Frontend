import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventConfirmDialogComponent } from './event-confirm-dialog.component';

describe('EventConfirmDialogComponent', () => {
  let component: EventConfirmDialogComponent;
  let fixture: ComponentFixture<EventConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
