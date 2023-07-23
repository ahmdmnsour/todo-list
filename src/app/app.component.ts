import { Component } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'todo list';

  tasks: Task[] = [];
  filteredTasks: Task[] = this.tasks;

  listValue = 'all';

  currentPage = 0;
  pageSize = 5;

  add(taskTitle: string) {
    this.tasks.push(new Task(taskTitle));
  }

  delete(task: Task): void {
    this.tasks.splice(this.tasks.findIndex(t => t === task), 1);
    if (Math.ceil(this.filteredTasks.length/this.pageSize) < this.currentPage+1) {
      this.currentPage--;
    }
  }

  filter(searchValue?: string) {
    if (searchValue !== '' && searchValue !== undefined && this.listValue === 'completed') {
      this.filteredTasks = this.tasks.filter(task =>
        task.title.includes(searchValue) && task.completed);
    } else if (searchValue !== '' && searchValue !== undefined) {
      this.filteredTasks = this.tasks.filter(task =>
        task.title.includes(searchValue));
    } else if (this.listValue === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed === true);
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  changePage(currentPage: number) {
    this.currentPage = currentPage;
  }
}
