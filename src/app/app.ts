import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Додаємо цей модуль про всяк випадок
import { Sidebar } from './components/sidebar/sidebar';
import { MainContent } from './components/main-content(r)/main-content';

@Component({
  selector: 'app-root',
  standalone: true,
  // ВАЖЛИВО: Перевір, щоб назви Sidebar та MainContent збігалися з імпортом вище
  imports: [CommonModule, Sidebar, MainContent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  profileData = {
    firstName: 'Jhon',
    lastName: 'ABIRAR',
    jobTitle: 'UI DESIGNER'
  };

  experienceList = [
    { position: 'Senior UI Designer', company: 'Google', tag: 'Present', description: 'Working on material design system...' },
    { position: 'Web Developer', company: 'Amazon', tag: '2017-2019', description: 'Developed responsive frontend components...' }
  ];
}