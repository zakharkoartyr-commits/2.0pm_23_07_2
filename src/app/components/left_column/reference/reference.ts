import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  templateUrl: './reference.html',
  styleUrl: './reference.scss'
})
export class ReferenceComponent {
  refName = 'Sara Taylore';
  isLoaded = true; // Можна змінити на false, щоб побачити @else
}