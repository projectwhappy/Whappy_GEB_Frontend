import {Participant} from './participant';
import {Address} from './address';

export interface StoreEvent {
  code: string;
  label: string;
  description: string;
  date: string; // date - time
  store: string;
  _bannerUrl?: string; // No non c'è
  address?: Address;
  _storeName?: string;
  _nInvited?: number;
  _nParticipants?: number;

}
