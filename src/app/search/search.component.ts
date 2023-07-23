import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  searchValue: string = '';

  onSearch() {
    if (this.searchValue !== null) {
      this.search.emit(this.searchValue);
    }
  }
}
