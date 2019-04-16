import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../../core/http/authentication.service';
// import {AdminService} from '../../../../core/http/admin.service';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public form;
  public isLoading = false;
  public loginErrors = false;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.form = this.fb.group(
      {
        mail: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  ngOnInit() {
  }

  public doAction() {
    this.isLoading = true;
    this.loginErrors = false;
    const vals = this.form.value;
    this.authenticationService.login(vals.mail, vals.password)
    .pipe(first())
    .subscribe(
    data => {
        this.router.navigate(['/admin/campaigns']);
    },
    error => {
        this.loginErrors = error;
        this.isLoading = false;
    });
  }
}
