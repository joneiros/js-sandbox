import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-new-question',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: "./new-question.component.html",
  styleUrl: './new-question.component.css'
})
export class NewQuestionComponent {
  questionsService: QuestionsService = inject(QuestionsService);

  questionForm = new FormGroup({
    questionText: new FormControl(''),
    pubDate: new FormControl('')
  });

  submitQuestion() {
    this.questionsService.submitQuestion(
      this.questionForm.value.questionText ?? '',
      this.questionForm.value.pubDate ?? ''
    );
  }

}
