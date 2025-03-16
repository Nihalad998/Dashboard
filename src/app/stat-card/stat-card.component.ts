import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() icon: string = '';
  @Input() color: string = 'primary';
  @Input() isPercentage: boolean = false;

  get formattedValue(): string {
    if (this.isPercentage) {
      return `${this.value}%`;
    }
    return this.value.toLocaleString();
  }
}
