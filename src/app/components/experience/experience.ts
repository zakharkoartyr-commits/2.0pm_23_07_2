import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="experience">
      <h2>ДОСВІД</h2>
      @for (job of jobs; track job.position) {
        <div (click)="selectJob(job.position)" style="cursor:pointer; margin-bottom: 10px;">
          <p><strong>{{ job.position }}</strong> — {{ job.company }}</p>
        </div>
      }
    </section>
  `
})
export class Experience {
  @Input() jobs: any[] = [];
  @Output() onJobSelect = new EventEmitter<string>(); // Важливо: EventEmitter<string>

  selectJob(position: string) {
    this.onJobSelect.emit(position); // Відправляємо рядок
  }
}