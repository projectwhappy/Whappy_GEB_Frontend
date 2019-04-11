import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AdminService} from '../../../../core/http/admin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public form;
  public isLoading = false;
  public loginErrors = false;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {
    this.form = this.fb.group(
      {
        email: ['', Validators.required],
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
    console.log(vals);
    this.adminService.adminLogin({
      ...vals
    }).then(() => {
        // this.isLoading = false;
        console.log('login riuscito');
        // this.router.navigate(['/campaigns']);
      },
      (err) => {
        // this.isLoading = false;
        this.loginErrors = true;
        console.log(err);
      });
  }
}
