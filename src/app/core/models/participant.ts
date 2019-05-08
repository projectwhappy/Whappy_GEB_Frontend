export interface Participant {
  code: string;
  firstname: string;
  lastname: string;
  confirmed: string|number;
  checked_in: string|number;
  qrcode: string;
  mail: string;
}
