import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "src/app/Interfaces/common.interface";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  isAuthenticateValue = false;
  constructor(private http: HttpClient) {}

  auth(url: string) {
    return this.http.get<LoginResponse>(`${this.baseUrl}${url}`);
  }
  public get isAuthenticate() {
    return this.isAuthenticateValue;
  }

  public set isAuthenticate(authenticate: boolean) {
    this.isAuthenticateValue = authenticate;
  }
}
