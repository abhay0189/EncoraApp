import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CustomMaterialModule } from "../material/material.module";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule } from "@angular/forms";
import { AddComponent } from "./dialogs/add/add.component";
import { EditComponent } from "./dialogs/edit/edit.component";
import { DeleteComponent } from "./dialogs/delete/delete.component";

@NgModule({
  declarations: [AddComponent, EditComponent, DeleteComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    LayoutModule,
    FormsModule,
  ],
  exports: [AddComponent, EditComponent, DeleteComponent],
})
export class SharedModule {}
