import { Component, OnInit } from '@angular/core';

import { DataService } from "../data.service";
import { ChartData, ChartOptions } from "chart.js";
//import { title } from 'process';

interface StatCard {
  title: string;
  value: number;
  icon: string;
  color: string;
  isPercentage?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  timeframe: string = 'monthy';
  statCards: StatCard[] = [
    { title: 'Total Revenue', value: 0, icon: 'trending_up', color: 'primary' },
    { title: 'Nwe users', value:0, icon: 'person_add', color: 'info' },
    { title: 'Conversion Rate', value: 0, icon: 'swap_horiz', color: 'success', isPercentage: true },
    { title: 'Bounce Rate', value: 0, icon: 'call_missed_outgoing', color: 'warning', isPercentage: true }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData(this.timeframe).subscribe(data => {
      this.statCards[0].value = data.totalRevenue;
      this.statCards[1].value = data.newUsers;
      this.statCards[2].value = data.conversionRate;
      this.statCards[3].value = data.bounceRate;
    });
  }
  
  changeTimeframe(event: any): void {
    this.timeframe = event.target.value;
    this.loadData();
  }

}
