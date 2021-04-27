// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ChartComponent } from "ng-apexcharts";

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexChart
// } from "ng-apexcharts";
// import { ReportModel } from 'src/app/models/report.model';
// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };
// @Component({
//   selector: 'app-report-cskh',
//   templateUrl: './report-cskh.component.html',
//   styleUrls: ['./report-cskh.component.scss']
// })
// export class ReportCskhComponent implements OnInit {
//   @ViewChild("chart") chart: ChartComponent;
//   @ViewChild("chart1") chart1 : ChartComponent;
  
//   public chartOptions: Partial<ChartOptions>;
//   public chartOptions1: Partial<ChartOptions>;
//   listFilter;
//   conFig = new ReportModel;
//   constructor() { }

//   ngOnInit(): void {
//     this.listFilter = this.conFig.filter;
//     this.chartOptions = {
//       series: [44, 55, 13, 43, 22],
//       chart: {
//         width: 380,
//         type: "pie"
//       },
//       labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: "bottom"
//             }
//           }
//         }
//       ]
//     };
  

//     this.chartOptions1 = {
//       series: [20, 30, 40, 10],
//       chart: {
//         width: 380,
//         type: "pie"
//       },
//       labels: ["Team dd", "Team B", "Team C", "Team D"],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart1: {
//               width: 200
//             },
//             legend: {
//               position: "bottom"
//             }
//           }
//         }
//       ]
//     };
  
//   }
//   handleCallback(value){
    
//   }
 
// }
