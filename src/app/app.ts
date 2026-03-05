import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, Experience],
  template: `
    <div class="resume-container">
      <app-sidebar [name]="firstName" [lastName]="lastName"></app-sidebar>

      <main class="right-column">
        <div class="skills">
          <h3>Навички:</h3>
          <ul>
            @for (skill of ['HTML', 'SCSS', 'Angular']; track skill) {
              <li>{{ skill }}</li>
            }
          </ul>

          @if (firstName === 'Джон') {
            <p>Студент групи PM-23 авторизований</p>
          }
        </div>

        <app-experience 
          [jobs]="experienceData" 
          (onJobSelect)="handleJobClick($event)">
        </app-experience>
      </main>
    </div>
  `
})
export class AppComponent {
  firstName = 'Джон';
  lastName = 'АБІРАР';

  experienceData = [
    { position: 'Дизайнер', company: 'Google' },
    { position: 'Розробник', company: 'Amazon' }
  ];

  handleJobClick(event: any) {
    alert('Output спрацював! Вибрано вакансію: ' + event);
  }
}