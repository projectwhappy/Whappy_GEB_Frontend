import {Component, OnInit} from '@angular/core';
import {Store} from 'src/app/core/models/store';
import {FormArray, FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {StoreService} from '../../../../core/http/store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../../core/http/event.service';
import {CommunicationService, TotalTargets} from '../../../../core/http/communication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-send-campaign',
  templateUrl: './send-campaign.component.html',
  styleUrls: ['./send-campaign.component.scss']
})
export class SendCampaignComponent implements OnInit {
  public form;
  public stores: Store[] = [];
  public campaignCode: string;
  public target: TotalTargets;
  public target$: any;


  constructor(private fb: FormBuilder,
              private storeService: StoreService,
              private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute,
              private communicationService: CommunicationService,
              private http: HttpClient,
  ) {

    // Create a FormControl for the select/unselect all checkbox
    const selectAllControl = new FormControl(false);

    this.form = this.fb.group(
      {
        selectAll: selectAllControl,
        stores: new FormArray([]),
        fromAge: [18, Validators.required],
        toAge: [65, Validators.required],
        gender: ['all', Validators.required],
      }
    );

    this.storeService.getStores().then((stores: Store[]) => {
      this.stores = stores;
    })
      .then(() => {
        this.addCheckboxes();
      });
  }

  private addCheckboxes() {
    this.stores.map((s, i) => {
      const control = new FormControl(false);  // new FormControl(i === 0); to set the first element to checked
      (this.form.controls.stores as FormArray).push(control);
    });
  }

  ngOnInit() {
    this.onChanges();
    this.campaignCode = this.route.snapshot.paramMap.get('campaign-code');
  }


  onChanges() {
    // Subscribe to changes on the selectAll checkbox
    this.form.get('selectAll').valueChanges.subscribe(b => {
      this.form
      .get('stores')
      .patchValue(Array(this.stores.length).fill(b), {emitEvent: false});
    });

    // Subscribe to changes on the stores checkboxes
    this.form.get('stores').valueChanges.subscribe(val => {
      const allSelected = val.every(b => b === true); // check if all the items is equal
      if (this.form.get('selectAll').value !== allSelected) {
        this.form.get('selectAll').patchValue(allSelected, {emitEvent: false});
      }
    });

    this.form.valueChanges.subscribe(values => {
      this.target$ = this.getTarget();
    }, (err) => {
      console.log(err);
    });
  }


  public getTarget() {

    // Chiedere a luca, le modifiche che faccio alla variabile formValue influiscono anche su form.value

    const selectedStores = this.form.getRawValue().stores
      .map((checked, index) => checked ? this.stores[index].storeCode : null)
      .filter(value => value !== null);

    let formValues = this.form.getRawValue();
    formValues.stores = selectedStores;
    delete formValues.selectAll; // da vedere, fa problemi
    console.log(this.form.value.stores);
    console.log(formValues.stores);

    this.communicationService.getTargetedPeopleByEventCode(this.campaignCode, {
      ...formValues,
    }).then((res: TotalTargets) => {
      this.target = res;
    }, (err) => {
      console.log(err);
    });

  }

  public sendCampaign() {
    const selectedStores = this.form.getRawValue().stores
      .map((checked, index) => checked ? this.stores[index].storeCode : null)
      .filter(value => value !== null);
    const vals = this.form.getRawValue();
    vals.stores = selectedStores;
    delete vals.selectAll; // da vedere, fa problemi

    this.eventService.sendEvent(this.campaignCode, {
      ...vals
    }).then( () => {
      this.router.navigate(['/admin/campaigns'], );
    }, (err) => {
      console.log(err);
    });
  }
}
