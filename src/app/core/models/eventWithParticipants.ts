import { Participant } from './participant';

export interface EventWithParticipants {
    event: Event;
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