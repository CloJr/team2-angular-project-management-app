import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-lists-details',
  templateUrl: './lists-details.component.html',
  styleUrls: ['./lists-details.component.css']
})
export class ListsDetailsComponent implements OnInit {
  @Input() task: Task


  constructor() { }

  ngOnInit(): void {
  }

}
