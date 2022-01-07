import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Output() categoryEvent = new EventEmitter();
  constructor() { }

  onCategorySelect(value: string) {
    this.categoryEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
