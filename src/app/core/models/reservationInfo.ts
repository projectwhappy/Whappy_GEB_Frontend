import { Person } from './person';

export interface ReservationInfo {
    start_date:string;
    invited_person:Person;
    reservation_qr:string;
}
