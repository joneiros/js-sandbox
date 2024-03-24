import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question/question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <h2>Details</h2>
    <div *ngIf="question; else noQuestion">
      <p>Question: <strong>{{question.question_text}}</strong></p>
      <p>id: {{question.id}}</p>
      <p>pub_date: {{question.pub_date}}</p>
    </div>

    <ng-template #noQuestion>
      <p>No valid Question selected.</p>
    </ng-template>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  questionService: QuestionsService = inject(QuestionsService);

  questionId = -1;
  question: Question | undefined;

  constructor() {
    this.questionId = Number(this.route.snapshot.params['id']);
    //synchronous
    //this.question = this.questionService.getQuestionById(this.questionId);

    //async
    this.questionService.getQuestionById(this.questionId).then((question: Question | undefined) =>
    {
      this.question = question;
    });
  }
}
