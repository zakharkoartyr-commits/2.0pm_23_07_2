import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftColumn } from './components/left_column/left_column';
import { RightColumn } from './components/right_column/right_column';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeftColumn, RightColumn],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'my-resume';
}