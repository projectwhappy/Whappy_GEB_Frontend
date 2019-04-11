export interface Store {
  storeCode: string;
  banner?: string;
  label: string;
  description: string;
  address?: {
    name: string;
    address: string;
    city: string;
    zipcode: string;
    province: string;
    country: string;
  };
}
