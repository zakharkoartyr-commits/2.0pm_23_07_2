import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// Реєструємо всі необхідні компоненти Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss'
})
export class ExpertiseComponent implements AfterViewInit {

  // Виконується після того, як HTML-шаблон завантажився
  ngAfterViewInit() {
    this.initCharts();
  }

  private initCharts() {
    // Дані для твоїх навичок (назва canvas та відсоток)
    const skills = [
      { id: 'chartPhotoshop', percent: 90 },
      { id: 'chartIllustrator', percent: 80 },
      { id: 'chartInDesign', percent: 75 },
      { id: 'chartPowerPoint', percent: 85 }
    ];

    skills.forEach(skill => {
      this.createDoughnutChart(skill.id, skill.percent);
    });
  }

  private createDoughnutChart(canvasId: string, percentage: number) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percentage, 100 - percentage],
          backgroundColor: ['#e86142', '#f0f0f0'], // Помаранчевий та світло-сірий
          borderColor: 'transparent',
          borderWidth: 0
        }]
      },
      options: {
        cutout: '80%', // Робимо кільце тонким
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        events: [] // Вимикаємо анімації при наведенні
      }
    });
  }
}