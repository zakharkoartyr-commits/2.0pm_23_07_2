import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../components/services/resume';

// ТУТ МАЮТЬ БУТИ ІМПОРТИ УСІХ ПІДКОМПОНЕНТІВ:
import { PhotoComponent } from './photo/photo';
import { ContactsComponent } from './contacts/contacts';
import { ReferenceComponent } from './reference/reference';
import { HobbiesComponent } from './hobbies/hobbies';

@Component({
  selector: 'app-left_column',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,    // Додай сюди
    ContactsComponent, // Додай сюди
    ReferenceComponent,// Додай сюди
    HobbiesComponent   // Додай сюди
  ],
  templateUrl: './left_column.html',
  styleUrl: './left_column.scss'
})
export class LeftColumn implements OnInit {
  firstName: string = '';
  lastName: string = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.firstName = data.personalData.firstName;
        this.lastName = data.personalData.lastName;
      },
      error: (err) => console.error('Помилка завантаження:', err)
    });
  }
}