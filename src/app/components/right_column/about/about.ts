import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html'
})
export class AboutComponent {
  isOpen = true;

  // 1. Оголошуємо Output
  @Output() toggleStatus = new EventEmitter<boolean>();

  toggle() {
    this.isOpen = !this.isOpen;
    // 2. "Вистрілюємо" подію вгору до батька
    this.toggleStatus.emit(this.isOpen);
  }
}