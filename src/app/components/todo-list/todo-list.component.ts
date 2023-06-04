import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { CalculService } from '../../services/calcul.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private calcSer: CalculService, private todoSer: TodoService) {}
  public todolist: Todo[] = [];
  nb_completed!: number;
  ngOnInit(): void {
    this.todoSer.getTodos().subscribe((data: Todo[]) => {
      this.todolist = data;
    });
  }

  getBilan() {
    this.nb_completed = this.calcSer.getNumberOf(
      this.todolist,
      'completed',
      true
    );
  }
}
