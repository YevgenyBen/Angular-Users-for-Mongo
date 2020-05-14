import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  OnEditUser: EventEmitter<User> = new EventEmitter<User>();
  OnUpdatedUser: EventEmitter<User> = new EventEmitter<User>();
  OnCreateMode: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  notifyOnUpdate() {
    this.OnUpdatedUser.emit()
  }

  goToCreateMode() {
    console.log("goToCreateMode")
    this.OnCreateMode.emit()
  }
  /**
   * user methods
   */
  createUser(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/contacts', { name: user.name, phone: user.phone })
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/contacts');
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/contacts/delete', { ...user })
  };

  editUser(user: User) {
    this.OnEditUser.emit(user)
  }

  updateUser(user: User) {
    return this.http.put<any>('http://localhost:3000/contacts', user)

  }
}
