import {Participant} from './participant';

export interface StoreEvent {
  code: string;
  _bannerUrl?: string;
  label: string;
  description: string;
  date: string; // date - time
  address?: {
    name: string;
    address: string; // street and number
    city: string;
    zipcode: string;
    province: string;
    country: string;
  };
  store?: string;
}
