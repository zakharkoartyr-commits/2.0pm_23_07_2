import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss'
})
export class ExpertiseComponent implements AfterViewInit {
  // Змінна для керування згортанням
  isOpen: boolean = true;

  ngAfterViewInit(): void {
    // Малюємо графіки один раз після ініціалізації view
    this.createChart('chartPhotoshop', 90);
    this.createChart('chartIllustrator', 80);
    this.createChart('chartInDesign', 75);
    this.createChart('chartPowerPoint', 85);
  }

  // Метод для перемикання секції
  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  createChart(id: string, percent: number): void {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;
    new Chart(canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percent, 100 - percent],
          backgroundColor: ['#e86142', '#eeeeee'],
          borderWidth: 0
        }]
      },
      options: { 
        cutout: '80%', 
        plugins: { legend: { display: false }, tooltip: { enabled: false } }, 
        responsive: true, 
        maintainAspectRatio: false 
      }
    });
  }
}