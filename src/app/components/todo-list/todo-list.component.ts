import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { CalculService } from '../../services/calcul.service';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(
    private calcSer: CalculService,
    private todoSer: TodoService,
    private activeRoute: ActivatedRoute
  ) {}
  public todolist: Todo[] = [];
  nb_completed!: number;
  id!: number;
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id == null) {
      this.todoSer.getTodos().subscribe({
        next: (data: Todo[]) => {
          this.todolist = data;
        },
      });
    } else {
      this.todoSer.getTodosByUserId(this.id).subscribe({
        next: (data: Todo[]) => {
          this.todolist = data;
        },
      });
    }
  }

  getBilan() {
    this.nb_completed = this.calcSer.getNumberOf(
      this.todolist,
      'completed',
      true
    );
  }
}
