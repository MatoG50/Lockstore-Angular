import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { ProductGuardService } from './Services/product-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [ProductGuardService],
  },
  // { path: 'products/product/:id', component: ProductDetailsComponent },
  {
    path: 'products',
    children: [{ path: 'product/:id', component: ProductDetailsComponent }],
  },
  { path: 'sales', component: SalesComponent },
  // {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
