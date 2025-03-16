import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ChartData, ChartConfiguration, ChartType } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() type: ChartType = 'line';
  @Input() timeframe: string = 'monthly';

  chartData: ChartData = { datasets: []};
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timeframe'] && !changes['timeframe'].firstChange) {
      this.loadChartData();
    }
  }

  loadChartData(): void {
    this.dataService.getChartData(this.title, this.type, this.timeframe).subscribe(data => {
      this.chartData = data;

      //  Add specific options based on chart type
      if (this.type === 'line' || this.type === 'bar') {
        this.chartOptions = {
          ...this.chartOptions,
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true
            }
          }
        };
      }
    });
  }
}