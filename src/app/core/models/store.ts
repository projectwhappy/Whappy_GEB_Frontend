export interface Store {
  code: string;
  image?: string;
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
