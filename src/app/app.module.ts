import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { SalesComponent } from './sales/sales.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserService } from './Services/user.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoggerService } from './Services/logger.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
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
