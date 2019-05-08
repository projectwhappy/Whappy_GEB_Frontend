import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from 'src/app/core/models/store';
import {StoreService} from '../../../../core/http/store.service';
import {EventService} from '../../../../core/http/event.service';
import { Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent implements OnInit {
  public form;
  public imageSrc;
  public banner;
  public bannerContent;
  public formatDate;
  public isLoading;
  public stores: Store[] = [];

  constructor(private fb: FormBuilder,
              private eventServices: EventService,
              private router: Router,
              private storeService: StoreService,
  ) {

    this.form = this.fb.group(
      {
        banner: ['', Validators.required],
        label: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required],
        address: fb.group(
          {
            name: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            zipcode: ['', Validators.required],
            province: ['', Validators.required],
            country: ['IT', Validators.required],
          }
        ),
        store: ['', Validators.required],
      }
    );

    this.storeService.getStores().then((stores: Store[]) => {
      this.stores = stores;
      this.form.patchValue({
        store: this.stores[0].code,
      });
    });
  }

  ngOnInit() {
  }

  onImageChange(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.banner = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitEvent() {
    const vals = this.form.getRawValue();
    this.isLoading = true;
    let parsedDate = moment(vals.date).unix();
    this.eventServices.createNewEvent({
      ...vals,
      banner: this.banner,
      date: parsedDate,
    })
      .then((eventRes: any) => {
      this.isLoading = false;
      this.router.navigate(['/admin/send-campaign', eventRes], );
    }, (err) => {
      this.isLoading = false;
      console.log(err);
    });

  }
}


