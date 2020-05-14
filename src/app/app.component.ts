import { Component } from '@angular/core';
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visible = false
  title = 'angularTest';
  constructor(private usersService: UsersService) {

    this.usersService.OnEditUser.subscribe(() => {
      this.visible = true
    })

    this.usersService.OnUpdatedUser.subscribe(() => {
      this.visible = false
    })

    this.usersService.OnCreateMode.subscribe(() => {
      console.log('OnCreateMode in app ');

      this.visible = true
    })

  }

}
