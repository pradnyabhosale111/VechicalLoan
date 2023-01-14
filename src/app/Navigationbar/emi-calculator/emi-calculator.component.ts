import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";     // installation is must for here  npm install apexcharts ng-apexcharts --save  : now --> angular json "node_modules/apexcharts/dist/apexcharts.min.js"


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent {
  

  constructor() {
    
  }


    title = 'homemodule';


    loanAmount: number;
    tenure: number;
    interest: number;
    emi: number;
  
   
    totalInterestCost: number;
    totalRepayment: number;
  
    public cal() {      
      var interestPerYear = (this.loanAmount * this.interest) / 100;
  
      this.interest = this.interest / (12 * 100);
      this.emi =
        (this.loanAmount *
          this.interest *
          Math.pow(1 + this.interest, this.tenure)) /
        (Math.pow(1 + this.interest, this.tenure) - 1);
      this.totalRepayment = this.emi * this.tenure;
      this.totalInterestCost = this.totalRepayment-this.loanAmount;

      this.chartOptions = {
        series: [this.loanAmount,  this.totalInterestCost],
        chart: {
          type: "donut"
        },
        labels: ["Principal Loan Amount", "Total Interest",],
        responsive: [
          {
            breakpoint: 520,
            options: {
              chart: {
                width: 500
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };

    }
  
    reset() {
      window.location.reload();
    }
    
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  

  }
  


