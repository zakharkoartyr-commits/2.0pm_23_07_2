import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo', // Цей селектор ти використовуєш у HTML
  standalone: true,      // Обов'язково для сучасного Angular
  imports: [CommonModule],
  templateUrl: './photo.html', // Перевір, чи назва файлу така сама
  styleUrl: './photo.scss'    // Перевір назву файлу стилів
})
export class PhotoComponent {
  // Тут поки що нічого не потрібно, просто пустий клас
}