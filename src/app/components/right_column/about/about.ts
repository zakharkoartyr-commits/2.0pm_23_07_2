import { Component, Input } from '@angular/core'; // Обов'язково додай Input тут
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  // Додаємо декоратор @Input, щоб прийняти текст із батьківського компонента
  @Input() text: string = ''; 
  
  isOpen: boolean = true;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}