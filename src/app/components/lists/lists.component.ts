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
  tasks: Task[] = [];


  faTrashAlt = faTrashAlt;
  // @Input() task: Task;
  // @Output() onAllDeleteTask: EventEmitter<Task> = new EventEmitter();
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Make an initial pull
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));

    // Listen for changes and filter as needed
    this.taskService.taskCategory.subscribe(category => {
      if (category === 'all') {
        this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
      } else {
        this.taskService.getTasks().subscribe((tasks) => {
          this.tasks = tasks.filter(task => task.category === category);
        });
      }
    });
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
  
  // This is not currently going anywhere
  // onalldelete(task){
  //   this.onAllDeleteTask.emit(task);
  //   console.log('123');
  // }
  
  deleteTask(task: Task){
    // This should just delete the task from the this.tasks[], and then update the service data, 
   
    
    // this.taskService.deleteTask(task).subscribe()
    //because of asynch, this is running concurrently with the line of code above, and then, it returns too fast
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));


    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter
      ((t)=> t.id !== task.id)));
  }

  deleteAllTasks(){
    console.log("So you have chosen death, now deleting all tasks")
    for(let i = 0; i < this.tasks.length; i++){
      // this.taskService.deleteTask(this.tasks[i])
      this.deleteTask(this.tasks[i])
    }
console.log();

    // this.taskService.deleteAllTask(task).subscribe(() => (this.tasks));      
  }

  // editTask(task: Task){
  //   this.taskService.editTask(task)
  // }

}