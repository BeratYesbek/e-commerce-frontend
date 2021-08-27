import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { SuggetionsComponent } from './components/suggetions/suggetions.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgxImgZoomModule  } from 'ngx-img-zoom';
import { ProductAddComponent } from './components/product-add/product-add.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NgbCarousel, NgbModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NavbarComponent,
    OffersComponent,
    SuggetionsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    CategoryAddComponent,
    SignUpComponent,
    SignInComponent,
    UserSettingsComponent,
    BrandAddComponent,
    FooterComponent,
    BrandComponent,
    HomeComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatFormFieldModule,
    NgxImgZoomModule ,
    MatInputModule,
    MatSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
     
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
