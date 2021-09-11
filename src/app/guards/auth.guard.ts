import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthenticationService } from "../services/core/authentication.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}

  /**
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticate) {
      return true;
    } else {
      return false;
    }
  }
}
