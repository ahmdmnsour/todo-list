import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  transform(tasks: Task[], currentPage: number, pageSize: number, length: number): Task[] {
    return tasks.slice(pageSize*currentPage, pageSize*(currentPage+1));
  }

}
