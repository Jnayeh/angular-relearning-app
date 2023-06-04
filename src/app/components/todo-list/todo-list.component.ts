import { Component, OnInit } from '@angular/core';
import { todo } from '../../models/todo';
import { CalculService } from '../../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private calcSer: CalculService) {}
  todolist: todo[] = [];
  nb_completed!: number;
  ngOnInit(): void {
    this.todolist = [
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: true,
      },
      { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
      {
        userId: 1,
        id: 4,
        title: 'quo adipisci enim quam ut ab',
        completed: true,
      },
    ];
  }

  getBilan() {
    this.nb_completed = this.calcSer.getNumberOf(this.todolist, 'completed', true);
  }
}
