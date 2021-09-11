import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/core/authentication.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoginValidationConfig } from "src/app/validators/login-validation-config";
import { first } from "rxjs/operators";
import { ToasterService } from "src/app/services/toaster.service";
import { Error } from "src/app/constants/constant.const";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  loginError = false;
  errorMsg: string;

  constructor(
    private router: Router,
    private loginService: AuthenticationService,
    private fb: FormBuilder,
    private vc: LoginValidationConfig,
    private readonly toasterService: ToasterService
  ) {}

  /**
   * initializes the component
   */
  ngOnInit() {
    this.loginForm = this.fb.group(this.vc.getLoginForm());
  }

  /**
   * processes the login credentials
   * @memberof LoginComponent
   */
  login() {
    this.loginService.auth("users").pipe(first()).subscribe(this.loginObserver);
  }

  private loginObserver = {
    next: (data) => {
      const userCheck = data.filter(
        (user) => user.email === this.loginForm.value.email
      );
      if (userCheck.length > 0) {
        this.loginService.isAuthenticate = true;
        this.router.navigate(["/home"]);
      } else {
        this.loginService.isAuthenticate = false;
        this.toasterService.openSnackBar(
          Error.EMAIL_NOT_REGISTERED,
          null,
          true
        );
      }
    },
    error: (err) => {
      this.loginError = true;
      this.toasterService.openSnackBar(Error.GENERIC_ERROR, null, true);
    },
    complete: () => {},
  };
}
