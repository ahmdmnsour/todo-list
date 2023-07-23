import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  taskTitle: string = '';
  isMatchingTitle: boolean = false;

  @Input() tasks!: Task[];

  @Output() add = new EventEmitter<string>();

  onAdd() {
    this.isMatchingTitle = false;

    this.tasks.forEach(task => {
      if (task.title === this.taskTitle) {
        this.isMatchingTitle = true;
        return;
      }
    });

    if (!this.isMatchingTitle && this.taskTitle.trim().length !== 0) {
      this.add.emit(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
