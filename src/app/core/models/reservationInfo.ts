import { Person } from './Person';

export interface ReservationInfo {
    start_date: string|number;
    invited_person: Person;
    reservation_qr: string;
}
