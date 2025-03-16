import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing the NgChartsModule from ng2-charts to use the charts
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Importing the DashboardComponent
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartCardComponent,
    StatCardComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }