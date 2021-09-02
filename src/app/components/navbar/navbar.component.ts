import { AuthService } from 'src/app/services/authService/auth.service';
import { User } from './../../models/user';
import { UserService } from './../../services/userService/user.service';
import { EventEmitterService } from './../../services/event-emitter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser? : User
  constructor(
    private eventEmitterService: EventEmitterService,
    private userService :UserService,
    private authService :AuthService
    ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.getCurrentUser()
    }
    if(this.eventEmitterService.subsNavComp == undefined){
      this.eventEmitterService.subsNavComp = this.eventEmitterService.invokeNavComponentCurrentUser.subscribe(respose => {
        this.getCurrentUser()
      });
    }
  }

  getCurrentUser(){
    let userId = Number(localStorage.getItem("userId"))
    this.userService.getUserById(userId).subscribe(response => {
      if((response.success)){
        this.currentUser = response.data
      }
    })
  }


}
