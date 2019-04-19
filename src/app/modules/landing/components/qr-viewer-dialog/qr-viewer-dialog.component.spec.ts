import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRViewerDialogComponent } from './qr-viewer-dialog.component';

describe('QRViewerDialogComponent', () => {
  let component: QRViewerDialogComponent;
  let fixture: ComponentFixture<QRViewerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRViewerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
