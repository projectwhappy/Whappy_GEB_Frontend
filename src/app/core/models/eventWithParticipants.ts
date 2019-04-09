import { Participant } from './participant';
import {StoreEvent} from './store-event';

export interface EventWithParticipants extends StoreEvent {
    participants: {
        list: Participant[];
    };
}
