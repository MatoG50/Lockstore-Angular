import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { LoginpageComponent } from './Home/loginpage/loginpage.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { SalesComponent } from './Components/sales/sales.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { HomeLayoutComponent } from './Components/home-layout/home-layout.component';
import { LoginLayoutComponent } from './Components/login-layout/login-layout.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: '',
    component: HomeLayoutComponent,
    ...canActivate(redirectToLogin),
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'addproduct',
        component: AddProductComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      // { path: 'products/product/:id', component: ProductDetailsComponent },
      // {
      //   path: 'products',
      //   children: [{ path: 'product/:id', component: ProductDetailsComponent }],
      // },
      { path: 'sales', component: SalesComponent },
    ],
  },

  {
    path: '',
    component: LoginLayoutComponent,
    ...canActivate(redirectToHome),
    children: [
      {
        path: 'login',
        component: LoginpageComponent,
      },
      {
        path: 'addemployee',
        component: AddEmployeeComponent,
      },
    ],
  },

  // {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
