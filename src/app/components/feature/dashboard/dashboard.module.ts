import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { LayoutModule } from "@angular/cdk/layout";
import { CustomMaterialModule } from "../../material/material.module";
import { SharedModule } from "../../shared/shared.module";
import { CompanyValidationConfig } from "src/app/validators/company-validation-config";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    CustomMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [CompanyValidationConfig],
})
export class DashboardModule {}
