// src/app/components/left_column/left_column.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Додай цей імпорт
import { PhotoComponent } from './photo/photo'; 
import { ContactsComponent } from './contacts/contacts';
import { ReferenceComponent } from './reference/reference';
import { HobbiesComponent } from './hobbies/hobbies';

@Component({
  selector: 'app-left_column',
  standalone: true,
  // 2. Додай PhotoComponent у цей масив
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
export class LeftColumn {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
}