import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../../../core/http/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public isNavOpen;
  @Output() public closeNav = new EventEmitter();
  public currentUserMail:string;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserMail = ((currentUser.mail) ? currentUser.mail : 'Guest');
    this.currentUserMail = currentUser.mail;
  }

  public sendCloseNav() {
    this.closeNav.emit();
  }

  public logOut() {
    this.authenticationService.logout();
    location.reload(true);
  }

}
