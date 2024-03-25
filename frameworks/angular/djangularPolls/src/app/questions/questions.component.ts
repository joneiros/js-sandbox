import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from '../question/question.component';
import { Question } from '../question/question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    QuestionComponent,
    CommonModule
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})

export class QuestionsComponent {
  questionsList: Question[] = [];
  questionService: QuestionsService = inject(QuestionsService);

  constructor() {
    this.questionService.getAllQuestions().then((questionsList: Question[]) =>
    {
      this.questionsList = questionsList;
    });
  }
}
