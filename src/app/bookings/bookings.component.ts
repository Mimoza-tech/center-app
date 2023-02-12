import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  constructor(
    private bookingService: BookingService // dependency injection -> Services werden Registriert und können einfach abgerufen werden
  ) {} //* Wird aufgerufen sobald eine Instanz von diesen Bookingcomponents erstellt wird

  bookings : Booking[] = [];

  ngOnInit(): void { //* Ist ein Event des Lifecycles = Lifecyclehook und ngOnInit = eine Methode oder Funktion in der Code ausgeführt wird wenn die Bookingscomponente initalisiert wird bzw. zu sehen ist.
    this.bookingService.getBookings().subscribe((result)=>{
      this.bookings = result;
    });
  }

  deleteBooking(booking: Booking) : void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter(b => b !== booking)
  }

}
