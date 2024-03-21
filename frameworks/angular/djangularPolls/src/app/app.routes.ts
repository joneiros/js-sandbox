import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { DetailsComponent } from './details/details.component';
import { NewQuestionComponent } from './new-question/new-question.component';

export const routes: Routes = [
    {
        path: 'double',
        component: AppComponent,
        title: 'Main Page'
    },
    {
        path: 'details',
        component: DetailsComponent,
        title: 'Question Detail Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Question Detail Page'
    },
    {
        path: 'question/new',
        component: NewQuestionComponent,
        title: 'Question Creation Page'
    },


];
