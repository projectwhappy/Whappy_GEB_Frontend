import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreConfirmDialogComponent } from './store-confirm-dialog.component';

describe('StoreConfirmDialogComponent', () => {
  let component: StoreConfirmDialogComponent;
  let fixture: ComponentFixture<StoreConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
