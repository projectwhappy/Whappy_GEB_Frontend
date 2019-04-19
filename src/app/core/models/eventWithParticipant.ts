import { Participant } from './participant';
import {StoreEvent} from './store-event';

export interface EventWithParticipant extends StoreEvent {
    _bannerUrl?: string;
    participant: Participant;
}
