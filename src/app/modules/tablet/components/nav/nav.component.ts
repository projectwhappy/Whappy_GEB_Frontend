import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../../../core/http/authentication.service';

type CurrentUser = { token: string, mail: string, role: string};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public isNavOpen;
  @Output() public closeNav = new EventEmitter();
  public currentUser:CurrentUser;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = currentUser;
    this.currentUser.mail = ((currentUser.mail) ? currentUser.mail : 'Guest');
  }

  public sendCloseNav() {
    this.closeNav.emit();
  }

  public logOut() {
    this.authenticationService.logout();
    location.reload(true);
  }

}
