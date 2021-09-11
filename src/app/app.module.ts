import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./routes/app-routing.module";
import { AppComponent } from "./app.component";

import { CustomMaterialModule } from "./components/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/core/login/login.component";
import { HeaderComponent } from "./components/core/header/header.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginValidationConfig } from "./validators/login-validation-config";
import { ErrorInterceptor } from "./interceptor/error.interceptor";
import { AdminComponent } from "./components/core/admin/admin.component";

@NgModule({
  declarations: [AdminComponent, AppComponent, LoginComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    LoginValidationConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
