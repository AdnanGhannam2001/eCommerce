import { Component, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'displayTime' })
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const date = new Date(value);
    const days = Math.floor(value / (1000 * 60 * 60 * 24));
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return `${days} Days - ${hours.toString().padStart(2, '0')} Hrs - ${minutes.toString().padStart(2, '0')} Mins - ${seconds.toString().padStart(2, '0')} Secs`;
  }
}

@Component({
  selector: 'ecommerce-time-down',
  templateUrl: './time-down.component.html',
  styleUrls: ['./time-down.component.scss']
})
export class TimeDownComponent {
  @Input() time!: number;

  constructor() {
    setInterval(() => {
      this.time -= 1000;
    }, 1000);
  }
}
