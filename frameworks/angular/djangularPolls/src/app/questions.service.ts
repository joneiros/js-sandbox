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

  getStubAllQuestions(): Question[] {
    return this.questionsListStub
  }
  getStubQuestionById(id: number): Question | undefined {
    return this.questionsListStub.find(question => question.id === id);
  }

  url = "http://localhost:8000/api/questions"

  async getAllQuestions(): Promise<Question[]> {
    const data = await fetch(this.url, {
      mode: 'cors',
      credentials: "include",
      headers: {
        "Origin": "http://localhost:4200/",
        "Accept": "*/*",
        "Access-Control-Allow-Credentials": "true",
      }
    });
    return await data.json() ?? [];
  }

  async getQuestionById(id: number): Promise<Question | undefined> {
    const data = await fetch(`${this.url}/${id}`, {
      mode: 'cors',
      credentials: "include",
      headers: {
        "Origin": "http://localhost:4200/",
        "Accept": "*/*",
        "Access-Control-Allow-Credentials": "true",
      }
    });
    return await data.json() ?? {};
  }
}
