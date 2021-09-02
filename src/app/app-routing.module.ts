import { LoginGuard } from './guards/login.guard';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: "products/:productId", component: ProductDetailComponent },
  { path: "categories/:categoryId/products", component: HomeComponent },
  { path: "sign_in", component: SignInComponent },
  { path: "sign_up", component: SignUpComponent },
  { path: "productAdd", component: ProductAddComponent, canActivate:[LoginGuard] },

  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "payment", component: PaymentComponent },
  { path: "order-detail", component: OrderDetailComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
