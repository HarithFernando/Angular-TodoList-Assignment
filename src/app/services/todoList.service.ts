import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from '../models/todoItem';

@Injectable({
    providedIn: 'root',
})
export class TodoListService {
    baseUrl = `https://jsonplaceholder.typicode.com/todos`;

    constructor(private httpClient: HttpClient) { }

    getTodoList(): Observable<ToDoItem[]> {
        return this.httpClient.get<ToDoItem[]>(this.baseUrl);
    }

    getTodoItemById(id: number) {
        let url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<ToDoItem>(url);
    }
}
