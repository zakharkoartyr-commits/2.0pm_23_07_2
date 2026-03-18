// app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Зміни тут назви на LeftColumn та RightColumn (з великої літери)
import { LeftColumn } from './components/left_column/left_column'; 
import { RightColumn } from './components/right_column/right_column'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Тут теж назви мають бути з великої літери
  imports: [CommonModule, LeftColumn, RightColumn], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  // app.ts
profileData = {
  firstName: 'Jhon',
  lastName: 'ABIRAR'
};

  experienceList = [
    { position: 'Senior UI Designer', company: 'Google', tag: 'Present', description: 'Working on material design system...' },
    { position: 'Web Developer', company: 'Amazon', tag: '2017-2019', description: 'Developed responsive frontend components...' }
  ];
}