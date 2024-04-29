import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Population by Species',
          data: [
            { x: 1976, y: 1, r: 10.6 },  // Buffaloes  
            { x: 1976, y: 2, r: 14.6 },  // Cattles
            { x: 1976, y: 3, r: 21.7 },  // Goats
            { x: 1986, y: 1, r: 15.7 },  // Buffaloes  
            { x: 1986, y: 2, r: 17.5 },  // Cattles
            { x: 1986, y: 3, r: 29.9 },  // Goats
            { x: 1996, y: 1, r: 20.3 },  // Buffaloes  
            { x: 1996, y: 2, r: 20.4 },  // Cattles
            { x: 1996, y: 3, r: 41.2 },  // Goats
          ],
          backgroundColor: this.getRandomColorArray(9), // Generate random colors
          borderColor: 'rgba(0, 0, 0, 0)', // Set border color to transparent
          borderWidth: 0, // Set border width to 0 to hide the lines
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: false,
            text: 'Population by Species Over Time',
            font: { size: 16, weight: 'bold' },
          },
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: false,
              text: 'Year',
              font: { size: 14, weight: 'bold' },
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Species',
              font: { size: 14, weight: 'bold' },
            },
          },
        },
      }
    });
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
