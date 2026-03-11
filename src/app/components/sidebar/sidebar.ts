import { Component, Input } from '@angular/core';
import { ContactsComponent } from './contacts/contacts';
import { HobbiesComponent } from './hobbies/hobbies';
import { ReferenceComponent } from './reference/reference';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  // Обов'язково імпортуємо дітей сюди!
  imports: [ContactsComponent, HobbiesComponent, ReferenceComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
}