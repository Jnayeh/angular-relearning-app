import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CalculService } from 'src/app/services/calcul.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private calcSer: CalculService, private userSer: UserService) {}
  listUsers: User[] = [];
  nb_repeated!: number;
  user_verif: string = '';
  ngOnInit(): void {
    this.userSer.getUsers().subscribe((data: User[]) => {
      this.listUsers = data;
    });
  }
  verify() {
    this.nb_repeated = this.calcSer.getNumberOf(
      this.listUsers,
      'username',
      this.user_verif
    );
  }
}
