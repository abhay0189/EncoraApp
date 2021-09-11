import { SelectionModel } from "@angular/cdk/collections";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { first } from "rxjs/operators";
import { DisplayContactColumns, Error } from "src/app/constants/constant.const";
import { ContactResponse } from "src/app/Interfaces/common.interface";
import { CommonService } from "src/app/services/common.service";
import { ToasterService } from "src/app/services/toaster.service";

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-contact.component.html",
  styleUrls: ["./list-contact.component.scss"],
})
export class ListContactComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns = DisplayContactColumns;
  contacts = new MatTableDataSource<ContactResponse>([]);
  resultsLength = 0;
  initialSelection = [];
  allowMultiSelect = true;
  selection;
  constructor(
    private commonService: CommonService,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.getContacts();
    this.selection = new SelectionModel<ContactResponse>(
      this.allowMultiSelect,
      this.initialSelection
    );
  }
  ngAfterViewInit() {
    this.contacts.paginator = this.paginator;
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
  onEdit() {
    this.toasterService.openSnackBar(
      "We can add and update to open the data in dialog or inline as well."
    );
  }
}
