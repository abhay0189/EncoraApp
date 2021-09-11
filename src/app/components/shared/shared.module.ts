import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CustomMaterialModule } from "../material/material.module";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    LayoutModule,
    FormsModule,
  ],
})
export class SharedModule {}
