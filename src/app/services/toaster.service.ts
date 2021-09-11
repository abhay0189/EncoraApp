import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  constructor(private readonly snackBar: MatSnackBar) {}

  /* It takes three parameters 
      1.the message string 
      2.the action 
      3.the duration, alignment, etc. */

  openSnackBar(message: string, action: string = null, error: boolean = false) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: error ? ["custom-style"] : [],
    });
  }
}
