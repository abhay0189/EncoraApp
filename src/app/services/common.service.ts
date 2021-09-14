import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {
  CompanyResponse,
  ContactResponse,
} from "../Interfaces/common.interface";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getCompany(url: string) {
    return this.http.get<CompanyResponse>(`${this.baseUrl}${url}`);
  }
  getContacts(url: string) {
    return this.http.get<ContactResponse>(`${this.baseUrl}${url}`);
  }
}
