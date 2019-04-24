import { Address } from './address';

export interface Store {
  storeCode: string;
  code?:string;
  banner?: string;
  label: string;
  description: string;
  address?: Address;
}
