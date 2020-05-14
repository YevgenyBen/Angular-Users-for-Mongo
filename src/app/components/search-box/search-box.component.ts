import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { User } from '../../models/user'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log("create clicked")
    this.usersService.goToCreateMode()
  }
}
