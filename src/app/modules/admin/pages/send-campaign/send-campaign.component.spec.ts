import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCampaignComponent } from './send-campaign.component';

describe('SendCampaignComponent', () => {
  let component: SendCampaignComponent;
  let fixture: ComponentFixture<SendCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
