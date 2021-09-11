import { Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginValidationConfig {
  getLoginForm() {
    return {
      email: ["", [Validators.required, Validators.email]],
    };
  }
}
