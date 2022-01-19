import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class ToDoComponent {
  constructor(private router: Router) {}
  title = 'to do list';

  navigate() {
    this.router.navigate(['form']);
  }
}
