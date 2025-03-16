import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ChartData, ChartType } from "chart.js";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  // Mock data for dashboard stat cards
  getData(timeframe: string): Observable<any> {
    const data = {
      daily: {
        totalRevenue: 1250,
        newUsers: 35,
        conversionRate: 3.5,
        bounceRate: 42.1
      },
      weekly: {
        totalRevenue: 8750,
        newUsers: 245,
        conversionRate: 4.2,
        bounceRate: 38.6
      },
      monthly: {
        totalRevenue: 37500,
        newUsers: 1050,
        conversionRate: 4.8,
        bounceRate: 35.2
      },
      yearly: {
        totalRevenue: 450000,
        newUsers: 12600,
        conversionRate: 5.2,
        bounceRate: 33.8
      }
    };

    return of(data[timeframe as keyof typeof data]);
  }

  // Mock data for charts
  getChartData(title: string, type: ChartType, timeframe: string): Observable<ChartData> {
    switch (title) {
      case 'Revenue Overview':
        return this.getRevenueData(timeframe);
      case 'User Acquisition':
        return this.getUserAcquisitionData(timeframe);
      case 'Traffic Sources':
        return this.getTrafficSourcesData();
      case 'Conversion Metrics':
        return this.getConversionMetricsData();
      default:
        return of({ labels: [], datasets: [] });
    }
  }

  private getRevenueData(timeframe: string): Observable<ChartData> {
    let labels: string[] = [];
    
    switch (timeframe) {
      case 'daily':
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        break;
      case 'weekly':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        break;
      case 'monthly':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        break;
      case 'yearly':
        labels = ['2020', '2021', '2022', '2023', '2024'];
        break;
    }

    return of({
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: this.generateRandomData(labels.length, 1000, 5000),
          borderColor: '#4e73df',
          backgroundColor: 'rgba(78, 115, 223, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Expenses',
          data: this.generateRandomData(labels.length, 800, 3500),
          borderColor: '#e74a3b',
          backgroundColor: 'rgba(231, 74, 59, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    });
  }

  private getUserAcquisitionData(timeframe: string): Observable<ChartData> {
    let labels: string[] = [];
    
    switch (timeframe) {
      case 'daily':
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        break;
      case 'weekly':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        break;
      case 'monthly':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        break;
      case 'yearly':
        labels = ['2020', '2021', '2022', '2023', '2024'];
        break;
    }

    return of({
      labels,
      datasets: [
        {
          label: 'New Users',
          data: this.generateRandomData(labels.length, 20, 150),
          backgroundColor: 'rgba(54, 185, 204, 0.7)'
        },
        {
          label: 'Returning Users',
          data: this.generateRandomData(labels.length, 10, 100),
          backgroundColor: 'rgba(28, 200, 138, 0.7)'
        }
      ]
    });
  }

  private getTrafficSourcesData(): Observable<ChartData> {
    return of({
      labels: ['Direct', 'Social', 'Organic Search', 'Referral', 'Email'],
      datasets: [
        {
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            'rgba(78, 115, 223, 0.8)',
            'rgba(28, 200, 138, 0.8)',
            'rgba(54, 185, 204, 0.8)',
            'rgba(246, 194, 62, 0.8)',
            'rgba(231, 74, 59, 0.8)'
          ],
          borderWidth: 1
        }
      ]
    });
  }

  private getConversionMetricsData(): Observable<ChartData> {
    return of({
      labels: ['Landing Page', 'Product Page', 'Checkout', 'Payment', 'Confirmation', 'Follow-up'],
      datasets: [
        {
          label: 'Current Period',
          data: [90, 75, 60, 45, 40, 30],
          fill: true,
          backgroundColor: 'rgba(78, 115, 223, 0.2)',
          borderColor: 'rgba(78, 115, 223, 1)',
          pointBackgroundColor: 'rgba(78, 115, 223, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(78, 115, 223, 1)'
        },
        {
          label: 'Previous Period',
          data: [85, 65, 50, 35, 30, 20],
          fill: true,
          backgroundColor: 'rgba(28, 200, 138, 0.2)',
          borderColor: 'rgba(28, 200, 138, 1)',
          pointBackgroundColor: 'rgba(28, 200, 138, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(28, 200, 138, 1)'
        }
      ]
    });
  }

  private generateRandomData(count: number, min: number, max: number): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
