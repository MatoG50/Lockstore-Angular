import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
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
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthService } from './Services/auth.service';
// import { TokenInterceptorService } from './Services/token-interceptor.service';
import { DateComponent } from './Components/date/date.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FilterPipe } from './Shared/filter.pipe';
import { HomeLayoutComponent } from './Components/home-layout/home-layout.component';
import { LoginLayoutComponent } from './Components/login-layout/login-layout.component';

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
    DateComponent,
    AddProductComponent,
    FilterPipe,
    HomeLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    AuthService,

    //  Token interceptor service
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
