import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-task';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
