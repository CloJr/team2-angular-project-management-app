import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {
  tasks: Task[] = TASKS;
  faTrashAlt = faTrashAlt;
  @Input() task: Task;
  @Output() onAllDeleteTask: EventEmitter<Task> = new EventEmitter();
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter
      ((t)=> t.id !== task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  completeTask(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  onalldelete(task){
    this.onAllDeleteTask.emit(task);
    console.log('123');
  }

  deleteAllTask(task: Task){
    this.taskService.deleteAllTask(task).subscribe(() => this.tasks);      
  }
}