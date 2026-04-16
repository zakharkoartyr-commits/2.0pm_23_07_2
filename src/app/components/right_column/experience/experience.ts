import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() jobs: any[] = [];
  @Output() deleteExperience = new EventEmitter<any>();

  // --- ДОДАЄМО СТАН ЗГОРТАННЯ ---
  isOpen: boolean = true; 

  // --- МЕТОД ДЛЯ ПЕРЕМИКАННЯ СТРІЛОЧКИ ---
  toggleSection(): void {
    this.isOpen = !this.isOpen;
  }

  // Твій існуючий метод для видалення (залишаємо без змін)
  onDelete(position: string): void {
    console.log('Дитина (Experience) каже: видалити', position);
    this.deleteExperience.emit({
      type: 'deleteExperience',
      position: position
    });
  }
}