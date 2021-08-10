import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task }  from '../Task';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  public taskCategory: BehaviorSubject<string> = new BehaviorSubject<string>('all');

  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.apiUrl)

  }

  // This is a delete method, its supposed to delete stuff, 
  // But it is also an observable... and it has a task as its data, 
  //
  deleteTask(task: Task):Observable<Task>{
    console.log(task, "Is going to be deleted");
    const url = `${this.apiUrl}/${task.id}`;
   
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

  completeTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  // deleteAllTask(task: Task): Observable<Task>{
  //   // const url = `${this.apiUrl}`;
  //   // return this.http.delete<Task>(url);

  // }
}
