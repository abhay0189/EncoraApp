import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AddComponent } from "src/app/components/shared/dialogs/add/add.component";
import { DeleteComponent } from "src/app/components/shared/dialogs/delete/delete.component";
import { EditComponent } from "src/app/components/shared/dialogs/edit/edit.component";
import { DisplayContactColumns, Error } from "src/app/constants/constant.const";
import { ContactResponse } from "src/app/Interfaces/common.interface";
import { CommonService } from "src/app/services/common.service";
import { ToasterService } from "src/app/services/toaster.service";

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-contact.component.html",
  styleUrls: ["./list-contact.component.scss"],
})
export class ListContactComponent implements OnInit {
  displayedColumns = DisplayContactColumns;
  contacts = [];
  resultsLength = 0;
  initialSelection = [];
  allowMultiSelect = true;
  selection;
  constructor(
    private commonService: CommonService,
    private toasterService: ToasterService,
    public dialogService: MatDialog
  ) {}

  ngOnInit() {
    this.getContacts();
    this.selection = new SelectionModel<ContactResponse>(
      this.allowMultiSelect,
      this.initialSelection
    );
  }
  getContacts() {
    this.commonService
      .getContacts("contacts")
      .pipe(first())
      .subscribe(this.contactObserver);
  }

  private contactObserver = {
    next: (data) => {
      this.contacts = data;
      this.resultsLength = data.length;
    },
    error: (err) => {
      this.toasterService.openSnackBar(Error.GENERIC_ERROR, null, true);
    },
    complete: () => {},
  };

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = (<any>this.contacts).length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : (<any>this.contacts).forEach((row) => this.selection.select(row));
  }
  openAddDialog() {
    const dialogRef = this.dialogService.open(AddComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.contacts = [...this.contacts, result];
      }
    });
  }

  startEdit(id: number, name: string, country: string, phone: string) {
    const dialogRef = this.dialogService.open(EditComponent, {
      data: {
        id: id,
        name: name,
        country: country,
        phone: phone,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let updatedData = this.contacts.filter((data) => data.id !== result.id);
        this.contacts = [...updatedData, result];
      }
    });
  }

  deleteItem(name: string, country: string, phone: string) {
    const dialogRef = this.dialogService.open(DeleteComponent, {
      data: { name: name, country: country, phone: phone },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contacts = this.contacts.filter(
          (data) => data.name !== result.name
        );
      }
    });
  }
}
