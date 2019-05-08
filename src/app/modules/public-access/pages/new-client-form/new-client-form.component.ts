import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {PeopleService} from '../../../../core/http/people.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.scss']
})
export class NewClientFormComponent implements OnInit {
  public form;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private dialog: MatDialog,
  ) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      mail: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
    }, {
      updateOn: 'blur'
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }

  isControlValid(control: FormControl) {
    if (!control.touched) {
      return null;
    } else {
      return control.errors;
    }
  }


  public doAction() {
    let vals = this.form.getRawValue();

    vals.birthDate = moment(vals.birthDate).unix();
    if (this.form.valid) {
      this.peopleService
        .createNewPeople({
          ...vals,
          preferredCommunication: 'mail',
          newsletterAcceptance: moment(new Date()).unix(),
        })
        .then(() => {
          const dialogConfirm = this.dialog.open(ConfirmDialogComponent, {
            width: '30rem',
            data: {title: 'Benvenuto ' + vals.firstname, text: 'Iscrizione completata.'}
          });

          dialogConfirm.afterClosed().subscribe(() => {
            this.form.reset();
          });
        });
    } else {
    }
  }
}
