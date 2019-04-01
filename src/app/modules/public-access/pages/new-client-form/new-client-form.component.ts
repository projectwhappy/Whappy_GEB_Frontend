import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {PeopleService} from '../../../../core/http/people.service';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.scss']
})
export class NewClientFormComponent implements OnInit {
  public form;

  constructor(private fb: FormBuilder, private peopleService: PeopleService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
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
    const vals = this.form.value;
    console.log(vals);
    if (this.form.valid) {
      this.peopleService.createNewPeople({
        ...vals,
        preferredCommunication: 'email',
        newsletterAcceptance: new Date(),
      });
    } else {
    }
  }
}
