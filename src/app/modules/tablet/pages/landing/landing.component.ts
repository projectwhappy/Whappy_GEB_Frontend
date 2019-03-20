import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/core/models/campaign';
import { PromotionInfo } from 'src/app/core/models/promotionInfo';
import { ReservationInfo } from 'src/app/core/models/reservationInfo';
import { InvitedInfo } from 'src/app/core/models/invitedInfo';
import { Person } from 'src/app/core/models/person';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  public promotionInfo:PromotionInfo;
  public reservationInfo:ReservationInfo;
  public invitedInfo:InvitedInfo;

  public campaign:Campaign;

  public campaigns:Campaign[] = [
    { // Landing 1
      id: '',
      membership: 'GB Membership club',					
      store_name: 'Flero',					
      event_imgUrl: './assets/images/landing1.png',				
      campaign_title: 'Valentines day promotion',			
      campaign_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
      campaign_elements: new Array("promotional_container"),
    },
    { // Landing 2-1
      id: '',
      membership: 'GB Membership club',					
      store_name: 'Flero',					
      event_imgUrl: './assets/images/landing2.png',				
      campaign_title: 'SS19 Private Event',			
      campaign_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
      campaign_elements: new Array("reserve_container", "time_countdown_container"),
    },
    { // Landing 2-2
      id: '',
      membership: 'GB Membership club',					
      store_name: 'Flero',					
      event_imgUrl: './assets/images/landing2.png',				
      campaign_title: 'SS19 Private Event',			
      campaign_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
      campaign_elements: new Array("reservation_container", "time_countdown_container"),
    },
    { // Landing 3-1
      id: '',
      membership: 'GB Membership club',					
      store_name: 'Flero',					
      event_imgUrl: './assets/images/landing3.png',				
      campaign_title: 'Prada Collection - Preview',			
      campaign_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
      campaign_elements: new Array("invite_person_container", "reservations_countdown_container"),
    },
    { // Landing 3-2
      id: '',
      membership: 'GB Membership club',					
      store_name: 'Flero',					
      event_imgUrl: './assets/images/landing3.png',				
      campaign_title: 'Prada Collection - Preview',			
      campaign_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',	
      campaign_elements: new Array("invited_people_container", "reservations_countdown_container"),
    }
  ];

  
  constructor() { 
    this.campaign = this.campaigns[2];
  }
  
  ngOnInit() {
    
    // let chiamate: { [key: string]: string } = {
    //   ["promotional_container"]:"promotionInfoCall",
    //   ["reserve_container"]:"promotionInfoCall",
    //   ["time_countdown_container"]:"promotionInfoCall",
    //   ["reservation_container"]:"promotionInfoCall",
    //   ["invite_person_container"]:"promotionInfoCall",
    //   ["reservations_countdown_container"]:"promotionInfoCall",
    //   ["invited_people_container"]:"promotionInfoCall",
    // };
    var chiamate:string[] = [
      "promotional_container", 
      "reserve_container", 
      "time_countdown_container", 
      "reservation_container", 
      "invite_person_container", 
      "reservations_countdown_container", 
      "invited_people_container"];


    if(this.campaign.campaign_elements.indexOf("promotional_container") > -1)
      this.promotionInfoCall();

    // if(this.campaign.campaign_elements.indexOf("reserve_container") > -1)
    //   this.reserveCall();

    if(this.campaign.campaign_elements.indexOf("time_countdown_container") > -1 || this.campaign.campaign_elements.indexOf("reservation_container") > -1 || this.campaign.campaign_elements.indexOf("reserve_container") > -1) 
      this.reservationInfoCall();

    // if(this.campaign.campaign_elements.indexOf("invite_person_container") > -1 )
    //   this.inviteCall();

    if(this.campaign.campaign_elements.indexOf("reservations_countdown_container") > -1 || this.campaign.campaign_elements.indexOf("invited_people_container") > -1)
      this.invitedInfoCall();

    
    
  }


  public promotionInfoCall(){
    this.promotionInfo = {
      start_date: "2019-02-04", 
      end_date: "14 febbraio", 
      discount: "-30%", 
      qrcode: "qrcode"
    };
  }
  public reserveCall(){
    
  }
  public reservationInfoCall(){
    var person: Person = {firstname: "Beatrice", surname: "Russo", phoneNumber: "3388844222", is_confirmed:false};
    this.reservationInfo = {
      start_date: "2019-05-03 21:00:00", // 2019-05-03T21:00:00
      invited_person: person,
      reservation_qr: "prova qr"
    };
  }
  public inviteCall(){
    
  }
  public invitedInfoCall(){
    var invitedPeople: Person[] = [
      {
        firstname: "Andrea", 
        surname: "Barbieri", 
        phoneNumber: "3388844222", 
        is_confirmed:true
      },
      {
        firstname: "Beatrice", 
        surname: "Russo", 
        phoneNumber: "3388844222", 
        is_confirmed:false
      },
    ];
    this.invitedInfo = {
      availableConfirmations: 5,
      invitedPeople: invitedPeople
    };
  } 
}
