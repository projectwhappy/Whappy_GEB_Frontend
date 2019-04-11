import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public isNavOpen = false;
  @Input() public goBack = false;

  constructor( private location: Location, ) { }

  ngOnInit() {
  }

  public toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  public backClicked() {
    this.location.back();
  }
}
