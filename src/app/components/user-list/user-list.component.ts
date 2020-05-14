import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { User } from '../../models/user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private usersService: UsersService) {
    this.usersService.OnUpdatedUser.subscribe(() => {
      this.getAllUsers()
    })
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe(response => {
      console.log(response)
      if (response.success)
        this.users = response.data
    })


  }


  deleteUser(user: User): void {
    console.log("sending user to delete:", user)
    this.usersService.deleteUser(user).subscribe(response => {
      console.log(response)
      this.getAllUsers()
    })
  }

  editUser(user: User) {

    this.usersService.editUser(user)

  }



}
