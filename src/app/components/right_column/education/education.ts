// Приклад для education.ts (аналогічно для experience.ts, expertise.ts)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss' // або посилайся на загальний файл стилів
})
export class EducationComponent {
  // 1. Стан секції (за замовчуванням розгорнуто)
  isExpanded: boolean = true;

  // 2. Функція перемикання стрілочки та контенту
  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}