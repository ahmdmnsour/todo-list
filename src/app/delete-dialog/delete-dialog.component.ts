import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  save() {
    this.dialogRef.close('delete');
  }

  close() {
    this.dialogRef.close();
  }

}
