import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() public inputDate: string;
  @Input() public dateFormat = 'yyyy-MM-ddTHH:mm:ss';
  private future: Date;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;

  constructor() {
  }

  dhms(t) {
    let days: number;
    let hours: number;
    let minutes: number;
    let seconds: number;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      ((days === 0) ? '' : days + ' days -'),
      hours + ' hours -',
      minutes + ' min -',
      seconds + ' sec'
    ].join(' ');
  }


  ngOnInit() {
    this.future = new Date(this.inputDate);

    this.counter$ = interval(1000)
      .pipe(map((x) => {
        return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      }));

    this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
