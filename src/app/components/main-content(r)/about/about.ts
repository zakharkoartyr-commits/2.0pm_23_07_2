import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  // Вказуємо назви файлів без слова .component
  templateUrl: './about.html', 
  styleUrl: './about.scss'
})
export class AboutComponent {
  isOpen = true; // Стан акордеона

  toggle() {
    this.isOpen = !this.isOpen;
  }
}