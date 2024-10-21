import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'products', loadComponent: () => import('./components/apiread-observable/apiread-observable.component').then(m=>m.ApireadObservableComponent)
    },

    {
        path:'formAngular18', loadComponent: () => import('./form1/formAngular18/app/app.component').then(m => m.AppComponent)
    },

    {
        path:'details/:id', loadComponent: () => import('./components/product-detail/product-detail.component').then(m=>m.ProductDetailComponent)
    },

    {
        path:'', redirectTo:'products', pathMatch:'full'
    }
];
