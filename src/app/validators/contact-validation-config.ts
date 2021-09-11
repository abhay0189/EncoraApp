import { Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactValidationConfig {
  getGeneralForm() {
    return {
      name: [null, [Validators.required]],
      country: [null, [Validators.required]],
      phone: [
        null,
        [Validators.required, Validators.pattern("^\\+[0-9]{9,14}$")],
      ],
    };
  }
}
