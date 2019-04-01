import { Person } from './Person';

export interface ReservationInfo {
    start_date:string;
    invited_person:Person;
    reservation_qr:string;
}
