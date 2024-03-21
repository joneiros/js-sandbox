import { Injectable } from '@angular/core';
import { Question } from './question/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  //stub data
  questionsListStub: Question[] = [
    {
      id: 0,
      question_text: 'Is Santa real?',
      pub_date: '2024-03-21T14:30:00Z'
    },
    {
      id: 1,
      question_text: 'How many numbers exist?',
      pub_date: '2024-03-21T14:30:00Z'
    },
    {
      id: 2,
      question_text: 'What\'s the saltiest snack?',
      pub_date: '2024-03-21T14:30:00Z'
    }
  ];

  getAllQuestions(): Question[] {
    return this.questionsListStub
  }
  getQuestionById(id: number): Question | undefined {
    return this.questionsListStub.find(question => question.id === id);
  }

  url = "http://localhost:8000/api/questions"

  async getRealAllQuestions(): Promise<Question[]> {
    const data = await fetch(this.url, {
      method: 'GET',
      mode: 'cors',
      credentials: "include"
    });
    return await data.json() ?? [];
  }

  async getRealQuestionById(id: number): Promise<Question | undefined> {
    const data = await fetch(`${this.url}/${id}`, {
      method: 'GET',
      mode: 'cors',
      credentials: "include"
    });
    return await data.json() ?? {};
  }
}
