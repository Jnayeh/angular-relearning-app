import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CalculService } from 'src/app/services/calcul.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private calcSer: CalculService) {}
  listUsers: User[] = [];
  nb_repeated!: number;
  user_verif!: string;
  ngOnInit(): void {
    this.listUsers = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Bret',
        email: 'Shanna@melissa.tv',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
      },
    ];
  }
  verify() {
    this.nb_repeated = this.calcSer.getNumberOf(
      this.listUsers,
      'username',
      this.user_verif
    );
  }
}
