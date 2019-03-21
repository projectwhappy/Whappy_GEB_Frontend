import { Participant } from './participant';
import {StoreEvent} from './store-event';

export interface EventWithParticipants {
    event: StoreEvent;
    address: {
        name: string;
        address: string;
        city: string;
        zipcode: string;
        province: string;
        country: string;
    };
    participants: {
        total: number;
        checked_in: number;
        list: Participant[];
    };
    store: string;
}
