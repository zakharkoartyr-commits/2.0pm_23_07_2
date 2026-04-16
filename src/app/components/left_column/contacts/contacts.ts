import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true, // Вказуємо, що це автономний компонент
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class ContactsComponent {
  // На даний момент клас порожній, оскільки дані прописані прямо в HTML.
  // Якщо захочеш зробити їх динамічними, можна додати змінні тут.
}