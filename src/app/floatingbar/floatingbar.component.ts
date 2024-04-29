import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-floatingbar',
  templateUrl: './floatingbar.component.html',
  styleUrls: ['./floatingbar.component.css']
})
export class FloatingbarComponent implements OnInit, AfterViewInit {
  @ViewChild('floatingBarChart') floatingBarChart!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.floatingBarChart.nativeElement.getContext('2d');
    if (ctx) {
      const data = this.generateRandomData(4); // Generate random data for 4 bars
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4'],
          datasets: [{
            label: 'Floating Bar Chart',
            data: data,
            backgroundColor: this.getRandomColorArray(4), // Generate random colors
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            },
            y: {
              min: 0,
              max: 50 // Adjust as needed
            }
          }
        }
      });
    }
  }

  // Function to generate random data for the Y coordinates of the bars
  generateRandomData(length: number): any[] {
    const data: any[] = [];
    for (let i = 0; i < length; i++) {
      const y = Math.floor(Math.random() * 50); // Random Y coordinate
      data.push({ x: i, y: y });
    }
    return data;
  }

  // Function to generate random colors
  getRandomColorArray(length: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < length; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
      colors.push(color);
    }
    return colors;
  }
}
