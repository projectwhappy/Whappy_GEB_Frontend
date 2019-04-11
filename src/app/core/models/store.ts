import { Address } from './address';

export interface Store {
  storeCode: string;
  banner?: string;
  label: string;
  description: string;
  address?: Address;
}
