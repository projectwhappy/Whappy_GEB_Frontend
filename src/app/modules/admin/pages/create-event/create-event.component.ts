import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from 'src/app/core/models/store';
import {StoreService} from '../../../../core/http/store.service';
import {EventService} from '../../../../core/http/event.service';
import { Router} from '@angular/router';

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
        label: ['Evento bello', Validators.required],
        description: ['Proprio bello', Validators.required],
        date: ['', Validators.required],
        address: fb.group(
          {
            name: ['Villa blu', Validators.required],
            address: ['via blu, 3', Validators.required],
            city: ['Blulandia', Validators.required],
            zipcode: ['35143', Validators.required],
            province: ['Blu', Validators.required],
            country: ['IT', Validators.required],
          }
        ),
        store: ['', Validators.required],
      }
    );

    this.storeService.getStores().then((stores: Store[]) => {
      this.stores = stores;
      this.form.patchValue({
        store: this.stores[0].storeCode,
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

      const reader1 = new FileReader();
      reader1.onload = (e) => {
        this.bannerContent = reader1.result;
      };
      reader1.readAsArrayBuffer(file);
    }
  }

  onDateChange(event: any): void {
    this.formatDate = new Date(event.target.value);
  }

  parseDate(): void {
    console.log(this.formatDate);
    let year: number = this.formatDate.getFullYear();
    let month: number = this.formatDate.getMonth();
    let day: number = this.formatDate.getDay();
    let hours: number = this.formatDate.getHours();
    let minutes: number = this.formatDate.getMinutes();

    this.formatDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + '00';
  }

  submitEvent() {
    const vals = this.form.value;
    this.isLoading = true;
    this.parseDate();
    this.eventServices.createNewEvent({

      ...vals,
      banner: this.banner,
      date: this.formatDate,
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

