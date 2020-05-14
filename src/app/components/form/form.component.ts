import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  editMode = true;

  contact = {
    name: "",
    phone: "",
    _id: ""
  }
  constructor(private usersService: UsersService) {
    this.usersService.OnCreateMode.subscribe(() => {
      this.contact.name = ""
      this.contact.phone = ""
      this.contact._id = ""
      this.editMode = false;
    })

    this.usersService.OnEditUser.subscribe(user => {
      this.editMode = true;
      this.contact.name = user.name
      this.contact.phone = user.phone
      this.contact._id = user._id
    })

  }

  ngOnInit(): void {
  }

  submitUser() {
    if (this.editMode)
      this.usersService.updateUser(this.contact).subscribe(() => {
        this.usersService.notifyOnUpdate()
        this.contact.name = ""
        this.contact.phone = ""
        this.contact._id = ""
      })
    else
      this.usersService.createUser(this.contact).subscribe(() => {
        console.log("creating user")
        this.usersService.notifyOnUpdate()
        this.editMode = true;
      })
  }

}
