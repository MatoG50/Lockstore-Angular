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

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginpageComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'addemployee',
    component: AddEmployeeComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'products',
    component: ProductsComponent,
    ...canActivate(redirectToLogin),
  },
  // { path: 'products/product/:id', component: ProductDetailsComponent },
  {
    path: 'products',
    children: [{ path: 'product/:id', component: ProductDetailsComponent }],
    ...canActivate(redirectToLogin),
  },
  { path: 'sales', component: SalesComponent, ...canActivate(redirectToLogin) },
  // {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
