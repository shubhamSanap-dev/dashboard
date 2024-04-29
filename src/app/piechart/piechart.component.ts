import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChart!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.createPieChart();
  }

  createPieChart(): void {
    const ctx = this.pieChart.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut', // Use 'doughnut' for donut chart
        data: {
          labels: [],
          datasets: [{
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
}
