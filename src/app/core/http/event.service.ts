import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventService {
  public events: EventWithParticipants[] = [{
    event: {
      code: "47f8c888-7164-42c8-8344-9a2cef95dd1a",
      label: "nome 2",
      description: "descrizione 2",
      date: "2019-04-24"
    },
    address: {
      name: "whappy",
      address: "via venezia",
      city: "padova",
      zipcode: "35100",
      province: "padova",
      country: "IT"
    },
    participants: {
      list: [
        {
          code: "47e654e3-9445-44e4-bc61-eeb325711a9a",
          fullname: "Gino Paolino",
          checked_in: "2019-03-12 10:57:51"
        },
        {
          code: "83f583a6-e7aa-49d6-835f-b49d10526698",
          fullname: "Mario Rossi",
          checked_in: null
        }
      ],
      total: 2,
      checked_in: 1
    },
    store: "3229ea80-78d2-4785-bdc9-8e8ad6fab49d"
  }];

  constructor() {}

  public async getEventByStoreId(_id: string) {
    for(const event of this.events) {
      if(event.store == _id) {
        return event;
      }
    }
  }
}
