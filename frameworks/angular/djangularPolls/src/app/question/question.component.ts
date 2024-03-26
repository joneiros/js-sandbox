import { Question } from './question';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
      <li><a class="question-link" [routerLink]="['/details', question.id]" >{{question.question_text}}</a></li>
  `,
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  //stub data
  internalQuestion: Question = {
    id: 0,
    question_text: 'Have you seen this question?',
    pub_date: '2024-03-21T14:30:00Z'
  };

  // stub data passed into component
  @Input() question!: Question;
}
