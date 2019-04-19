import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Participant} from '../../../../core/models/participant';
import {EventService} from '../../../../core/http/event.service';

@Component({
  selector: 'app-qr-viewer-confirm-dialog',
  templateUrl: './qr-viewer-dialog.component.html',
  styleUrls: ['./qr-viewer-dialog.component.scss']
})
export class QRViewerDialogComponent implements OnInit {
  public qrCodeImage: string;

  constructor(public dialogRef: MatDialogRef<QRViewerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.qrCodeImage = data.qrCodeImage;
  }

  ngOnInit() {
  }

}
