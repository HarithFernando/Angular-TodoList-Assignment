import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todoList.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  toDoList: ToDoItem[] = [];
  first = 0;
  rows = 10;
  displayPopup: boolean = false;
  selectedItemId: number;
  selectedItemTitle: string;
  selectedItemStatus: string;

  constructor(
    private TodoListService: TodoListService
  ) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.TodoListService.getTodoList().subscribe((values) => {
      if (values) {
        this.toDoList = values;
      }
    })
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  displayItemDetails(item: ToDoItem) {
    this.TodoListService.getTodoItemById(item.id).subscribe((item) => {
      if (item) {
        this.selectedItemId = item.id;
        this.selectedItemTitle = item.title;
        this.selectedItemStatus = item.completed === true? "Completed":"Incomplete";
        this.displayPopup = true;
      }
    })

  }

}
