import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public isNavOpen: boolean;
  @Output() public closeNav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public sendCloseNav() {
    this.closeNav.emit();
  }

}
