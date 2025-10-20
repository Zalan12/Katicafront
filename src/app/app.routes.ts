import { Routes } from '@angular/router';
import { CListComponent } from './components/categories/list/list.component';
import { TListComponent } from './components/trafics/list/list.component';
import { TraficFormComponent } from './components/trafics/form/form.component';
import { CategFormComponent } from './components/categories/form/form.component';
import { ProdListComponent } from './components/products/list/list.component';
import { CustListComponent } from './components/customers/list/list.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProdFormComponent } from './components/products/form/form.component';
import { CustFormComponent } from './components/customers/form/form.component';

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
        path:'traficForm/:id',
        component:TraficFormComponent
    },
    {
        path:'categForm',
        component:CategFormComponent
    },
    {
        path:'categForm/:id',
        component:CategFormComponent
    },
    {
        path:'products',
        component:ProdListComponent
    },
    
    {
        path:'customers',
        component:CustListComponent
    },
    {
        path:'pricing',
        component:PricingComponent
    },
    {
        path:'productsForm',
        component:ProdFormComponent

    },
    
    {
        path:'productsForm/:id',
        component:ProdFormComponent
    },
    {
        path:'customersForm/:id',
        component:CustFormComponent
    },
    {
        path:'customersForm',
        component:CustFormComponent

    }
];
