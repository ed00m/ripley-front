import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductMiniComponent } from './product-mini/product-mini.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { LoadingComponent } from './loading/loading.component';
import { SuccessComponent } from './success/success.component';
import { ContainerComponent } from './container/container.component';
// Services
import { ProductService, CartService } from './services';
// Pipes
import { MoneyFormatPipe } from './pipes/money-format';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductMiniComponent,
    FooterComponent,
    ProductComponent,
    MoneyFormatPipe,
    CheckoutComponent,
    ProductsComponent,
    LoadingComponent,
    SuccessComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
