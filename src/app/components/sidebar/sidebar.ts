import { Component, Input } from '@angular/core'; // Додали Input сюди

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <div class="sidebar">
      <h2>{{ name }} {{ lastName }}</h2>
      <p>Студент групи PM-23</p>
    </div>
  `
})
export class Sidebar {
  @Input() name: string = ''; // Вже є
  @Input() lastName: string = ''; // ДОДАЙ ЦЕЙ РЯДОК, щоб виправити помилку NG8002
}