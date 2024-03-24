import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from './question/question.component';
import { Question } from './question/question';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    QuestionComponent,
    CommonModule
  ],
  template:`
    <h1>Questions</h1>
    <a [routerLink]="['/']">
      GOTO Main
    </a>
    <br>
    <a [routerLink]="['/question/new']">
      Create New Question
    </a>
    <section>
      <!-- syntax for referencing "question" as a singular object
        <app-question [question]="question"></app-question>-->

        <!-- List of Questions, prior to using Router -->
      <app-question
        *ngFor="let question of questionsList"
        [question]="question">
      </app-question>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Djangular Polls';
  /*
  question: Question = {
    id: 0,
    question_text: 'Passed Question?',
    pub_date: '2024-03-20T14:30:00Z'
  }
  */
  questionsList: Question[] = [];
  questionService: QuestionsService = inject(QuestionsService);

  constructor() {
    //synchronous
    //this.questionsList = this.questionService.getAllQuestions();

    //async
    this.questionService.getAllQuestions().then((questionsList: Question[]) =>
    {
      this.questionsList = questionsList;
    });
  }
}
