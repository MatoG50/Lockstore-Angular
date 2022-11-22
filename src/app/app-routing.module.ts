import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { LoginpageComponent } from './Home/loginpage/loginpage.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { SalesComponent } from './Components/sales/sales.component';
import { ProductGuardService } from './Services/product-guard.service';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'addproduct', component: AddProductComponent },
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
