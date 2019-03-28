import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StoreService} from '../../../../core/http/store.service';
import {Router} from '@angular/router';
import {StoreStateService} from '../../services/store-state.service';

@Component({
  selector: 'app-store-confirm-dialog',
  templateUrl: './store-confirm-dialog.component.html',
  styleUrls: ['./store-confirm-dialog.component.scss']
})
export class StoreConfirmDialogComponent implements OnInit {

  public inputPassword: string;
  public inputError: string;
  public isLoading = false;
  constructor(
    public dialogRef: MatDialogRef<StoreConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storeService: StoreService,
    private storeState: StoreStateService,
    private router: Router) {
  }

  ngOnInit() {

  }

  public showPassword() {
    this.inputError = null;
    this.isLoading = true;
    this.storeService.checkPassword(this.data.code, this.inputPassword).then((storeRes: any) => {
      this.isLoading = false;
      if (storeRes) {
        // password giusta
        this.storeState.setCurrentStoreId(this.data.code);
        this.router.navigate(['/event']);
        this.dialogRef.close();
      } else {
        // password errataù
        this.inputError = 'Password errata!';
      }
    }, (err) => {
      this.isLoading = false;
    });
    //alert(this.inputPassword);
  }
}
