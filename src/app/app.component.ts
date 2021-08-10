import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.taskService.taskCategory.next(queryParams.category);
    });
  }
}
