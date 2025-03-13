import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({ providedIn: "root"})
export class SnackBarService {
  private _snackBar = inject(MatSnackBar);
  constructor(private snackBarService: MatSnackBar) {}

  showMessage(message: string, action: string = "Ok", duration: number = 3000) {
    this._snackBar.open(message, action, {duration});
  }
}
