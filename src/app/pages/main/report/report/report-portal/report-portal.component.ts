// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexTitleSubtitle,
//   ApexStroke,
//   ApexGrid
// } from "ng-apexcharts";
// import { PortalModel } from 'src/app/common/model';
// import { ReportModel } from 'src/app/common/model/report.model';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   dataLabels: ApexDataLabels;
//   grid: ApexGrid;
//   stroke: ApexStroke;
//   title: ApexTitleSubtitle;
// };

// @Component({
//   selector: 'app-report-portal',
//   templateUrl: './report-portal.component.html',
//   styleUrls: ['./report-portal.component.scss']
// })


// export class ReportPortalComponent implements OnInit {
//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<ChartOptions>;

//   constructor(
    
//   ) { }
//   listFilter;
//   conFig = new ReportModel;
//   ngOnInit(): void {
//     this.listFilter = this.conFig.filter;
//     this.chartOptions = {
//       series: [
//         {
//           name: "Số dịch vụ mới",
//           data: [11, 22, 33, 44, 55, 66, 69, 91, 148, 250]
//         },
//       ],
//       chart: {
//         height: 350,
//         type: "line",
//         zoom: {
//           enabled: false
//         }
//       },
//       dataLabels: {
//         enabled: true
//       },
//       stroke: {
//         curve: "straight"
//       },
//       title: {
//         text: "",
//         align: "left"
//       },
//       grid: {
//         row: {
//           colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//           opacity: 0.5
//         }
//       },
//       xaxis: {
//         categories: [
//           '07/04/2021', '08/04/2021', '09/04/2021', '10/04/2021', '11/04/2021', '12/04/2021','13/04/2021', '14/04/2021'
//           ,'15/04/2021', '27/04/2021'
//         ]
//       }
//     };
//   }
//   handleCallback(value){
    
//   }
// }

