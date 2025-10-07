import { Routes } from '@angular/router';
import { CListComponent } from './components/categories/list/list.component';
import { TListComponent } from './components/trafics/list/list.component';
import { TraficFormComponent } from './components/trafics/form/form.component';
import { CategFormComponent } from './components/categories/form/form.component';

export const routes: Routes = [
    {
        path:'categories',
        component:CListComponent
    },
    {
        path:'trafics',
        component:TListComponent
    },
    {
        path:'traficForm',
        component:TraficFormComponent
    },
    {
        path:'categForm',
        component:CategFormComponent
    }
];
