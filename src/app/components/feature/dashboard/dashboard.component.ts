import { Component, OnInit } from "@angular/core";
import { first, map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { CommonService } from "src/app/services/common.service";
import { ToasterService } from "src/app/services/toaster.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CompanyValidationConfig } from "src/app/validators/company-validation-config";
import { CompanyResponse } from "src/app/Interfaces/common.interface";
import { Error } from "src/app/constants/constant.const";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  companies: CompanyResponse[] = [];
  companyForm: FormGroup;
  logo: string;
  showDetails = false;
  constructor(
    private readonly fb: FormBuilder,
    private commonService: CommonService,
    private vc: CompanyValidationConfig,
    private readonly toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.getCompanies();
    this.companyForm = this.fb.group(this.vc.getGeneralForm());
  }
  getCompanies() {
    this.commonService
      .getCompany("companies")
      .pipe(first())
      .subscribe(this.companyObserver);
  }

  private companyObserver = {
    next: (data) => {
      this.companies = data;
    },
    error: (err) => {
      this.toasterService.openSnackBar(Error.GENERIC_ERROR, null, true);
    },
    complete: () => {},
  };

  companyDropdownChange(id: string) {
    const selectDropdown = this.companies.filter(
      (company) => company.id === id
    )[0];
    this.companyForm.patchValue(selectDropdown);
    this.logo = selectDropdown.logo;
    this.showDetails = true;
  }
}
