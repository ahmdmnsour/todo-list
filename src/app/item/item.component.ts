import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../task.model';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private dialog: MatDialog) { }

  @Input() task!: Task;

  @Output() deletion = new EventEmitter<Task>();
  @Output() check = new EventEmitter<any>();

  editable: boolean = false;

  onDelete(task: Task) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data === 'delete') {
          this.deletion.emit(task);
        }
      }
    );
  }

  onCheck(task: Task) {
    task.completed = !task.completed;
    this.check.emit();
  }

  onEdit() {
    this.editable = !this.editable;
  }
}