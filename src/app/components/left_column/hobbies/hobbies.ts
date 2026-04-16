import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ДОДАЙ ЦЕ

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule], // ДОДАЙ СЮДИ
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss'
})
export class HobbiesComponent {
  hobbies = [
    { name: 'Travel', icon: 'fa-plane' },
    { name: 'Music', icon: 'fa-headphones' },
    { name: 'Writing', icon: 'fa-pen-nib' },
    { name: 'Chess', icon: 'fa-chess-knight' }
  ];
}