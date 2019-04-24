import {Component, OnInit} from '@angular/core';
import {PromotionInfo} from '../../../../core/models/promotionInfo';
import {ReservationInfo} from '../../../../core/models/reservationInfo';
import {InvitedInfo} from '../../../../core/models/invitedInfo';
import {Campaign} from '../../../../core/models/campaign';
import {Person} from '../../../../core/models/Person';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { QRViewerDialogComponent } from '../../components/qr-viewer-dialog/qr-viewer-dialog.component';
import * as moment from 'moment';
import { EventWithParticipant } from 'src/app/core/models/eventWithParticipant';
import { Participant } from 'src/app/core/models/participant';
import { EventService } from 'src/app/core/http/event.service';
import { environment } from 'src/environments/environment';


export interface InviteCodes {
  event: string;
  person: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  public promotionInfo: PromotionInfo;
  public reservationInfo: ReservationInfo;
  public invitedInfo: InvitedInfo;
  public eventWithParticipant: EventWithParticipant;
  public participant: Participant;
  public invitationQRImage: string;
  public inviteCodes: InviteCodes;
  public serverAPI:string = environment.serverAPI;

  constructor(
    public eventService: EventService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {

    let inviteToken = this.route.snapshot.queryParamMap.get('inviteToken');
    this.eventService.getInvitationByToken(inviteToken)
      .then((inviteCodes: InviteCodes) => {
        this.inviteCodes = inviteCodes;

        this.eventService.getEventByEventCodeWithInvitedPerson(inviteCodes.event, inviteCodes.person, null)
          .then((e:EventWithParticipant) => {
            this.eventWithParticipant = e;

            if (this.eventWithParticipant.participant.confirmed) {
              this.eventService.getInvitationQRCode(inviteCodes.event, inviteCodes.person)
                .then((_invitationQR: string) => {
                  this.invitationQRImage = _invitationQR;
                }, (err) => {
                  console.log('errore: ' + err);
                });
            }

          }, (err) => {
            console.log('errore: ' + err);
          });

      }, (err) => {
        console.log('errore: ' + err);
      });
  }

  public confirmParticipation() {
    this.eventService.confirmEventParticipation(this.inviteCodes.event, this.inviteCodes.person)
    .then((result:string) => {
      if (!result) {
        alert("successfully confirmed");
        location.reload(true);
      }
    }, (err) => {
      console.log('errore: ' + err);
    });
  }

  public openQRViewer() {
    if (this.invitationQRImage) {
      this.dialog.open(QRViewerDialogComponent, {
        width: '300px',
        data: {
          qrCodeImage: this.invitationQRImage
        }
      });
    }
  }

  public isEventTerminated() {
    const date = moment(this.eventWithParticipant.date);
    const now = moment();

    if (now < date) {
      return true;
    } else {
      return false;
    }
  }


}
