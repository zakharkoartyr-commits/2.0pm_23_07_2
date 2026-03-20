// src/app/components/left_column/left_column.ts
import { Component, OnInit } from '@angular/core'; // Додали OnInit
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume'; // Перевір шлях до сервісу!

import { PhotoComponent } from './photo/photo'; 
import { ContactsComponent } from './contacts/contacts';
import { ReferenceComponent } from './reference/reference';
import { HobbiesComponent } from './hobbies/hobbies';

@Component({
  selector: 'app-left_column',
  standalone: true,
  imports: [
    CommonModule, 
    PhotoComponent, 
    ContactsComponent, 
    ReferenceComponent, 
    HobbiesComponent
  ],
  templateUrl: './left_column.html',
  styleUrl: './left_column.scss'
})
export class LeftColumn implements OnInit {
  // Змінні для збереження даних
  firstName: string = '';
  lastName: string = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    // Отримуємо дані з бекенду
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.firstName = data.personalData.firstName;
        this.lastName = data.personalData.lastName;
      },
      error: (err) => console.error('Помилка завантаження даних:', err)
    });
  }
}