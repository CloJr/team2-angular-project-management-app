import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-lists-details',
  templateUrl: './lists-details.component.html',
  styleUrls: ['./lists-details.component.css']
})
export class ListsDetailsComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() OnToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onCompletedTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faCheck = faCheck;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task){
    this.OnToggleReminder.emit(task);
  }

  onCompleted(task){
    this.onCompletedTask.emit(task);
  }

}
