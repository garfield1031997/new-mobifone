import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { ReportModel } from 'src/app/common/model/report.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-report-ctkv',
  templateUrl: './report-ctkv.component.html',
  styleUrls: ['./report-ctkv.component.scss']
})
export class ReportCtkvComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  listFilter;
  conFig = new ReportModel;
  constructor() { }

  ngOnInit(): void {
    this.listFilter = this.conFig.filter;
    this.chartOptions = {
      series: [
        {
          name: "Thông báo gửi thành công",
          data: [70, 80, 90, 100, 80, 88, 99, 129, 238, 300]
        },
        {
          name: "Thông báo gửi không thành công",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 250]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          '07/04/2021', '08/04/2021', '09/04/2021', '10/04/2021', '11/04/2021', '12/04/2021','13/04/2021', '14/04/2021'
          ,'15/04/2021', '27/04/2021'
        ]
      }
    };
  }
  handleCallback(value){
    
  }
}
