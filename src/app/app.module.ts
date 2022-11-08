import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeCardComponent } from './Components/employees/employee-card/employee-card.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductComponent } from './Components/products/product/product.component';
import { SalesComponent } from './Components/sales/sales.component';
import { LoginpageComponent } from './Home/loginpage/loginpage.component';
import { UserService } from './Services/user.service';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { LoggerService } from './Services/logger.service';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductGuardService } from './Services/product-guard.service';
import { AuthService } from './Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    ProductsComponent,
    ProductComponent,
    SalesComponent,
    LoginpageComponent,
    AddEmployeeComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, LoggerService, ProductGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
