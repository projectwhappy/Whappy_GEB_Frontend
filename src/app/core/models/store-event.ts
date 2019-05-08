import {Participant} from './participant';
import {Address} from './address';

export interface StoreEvent {
  code: string;
  label: string;
  description: string;
  date: string|number; // date - time
  store: string;
  banner?: File; // No non c'è
  _bannerUrl?: string;
  address?: Address;
  _storeName?: string;
  _nInvited?: number;
  _nParticipants?: number;

}
