import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomMaterialModule } from "../../material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { ListContactComponent } from "./list-contact/list-contact.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactValidationConfig } from "src/app/validators/contact-validation-config";

@NgModule({
  declarations: [ListContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [ContactValidationConfig],
})
export class ContactModule {}
