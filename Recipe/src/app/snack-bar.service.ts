import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  openErrorSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 7000,
      horizontalPosition: 'right',
      panelClass: ['error-snackbar']
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 7000,
      horizontalPosition: 'right',
      panelClass: ['valid-snackbar']
    });
  }
}
