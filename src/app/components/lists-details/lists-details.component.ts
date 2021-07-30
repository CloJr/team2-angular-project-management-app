import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lists-details',
  templateUrl: './lists-details.component.html',
  styleUrls: ['./lists-details.component.css']
})
export class ListsDetailsComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
