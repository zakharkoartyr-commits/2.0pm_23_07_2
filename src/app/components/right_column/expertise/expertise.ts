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
  // 1. Стан секції (розгорнута за замовчуванням)
  isExpanded: boolean = true;

  // 2. Функція для перемикання стрілочки та контенту
  toggle(): void {
    this.isExpanded = !this.isExpanded;
    
    // Маленький лайфхак: якщо графіки зникають після розгортання, 
    // можна викликати рендер заново, але зазвичай Chart.js справляється сам.
  }

  // 3. Ініціалізація графіків після завантаження View
  ngAfterViewInit(): void {
    this.createChart('chartPhotoshop', 90);
    this.createChart('chartIllustrator', 80);
    this.createChart('chartInDesign', 75);
    this.createChart('chartPowerPoint', 85);
  }

  createChart(id: string, percent: number): void {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percent, 100 - percent],
          backgroundColor: ['#e86142', '#eeeeee'], // Помаранчевий та сірий
          borderWidth: 0
        }]
      },
      options: {
        cutout: '85%', // Товщина кільця (як на макеті)
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}