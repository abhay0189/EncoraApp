import { Injectable } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

@Injectable()
export class CompanyValidationConfig {
  getGeneralForm() {
    return {
      name: [null, [Validators.required]],
      logo: [null],
      description: [null, [Validators.required]],
    };
  }
}
