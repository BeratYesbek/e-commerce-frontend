import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInFormGroup!: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private authService :AuthService,
    private eventService :EventEmitterService
    ) { }

  ngOnInit(): void {
    this.createSignInFormGroup()
  }

  createSignInFormGroup(){
    this.signInFormGroup = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }
  signIn(){
    let signIn = Object.assign({},this.signInFormGroup.value)
    if(this.signInFormGroup.valid){
      this.authService.signIn(signIn).subscribe(response => {
        if(response.success){
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("userId",response.data.user.userId.toString())
          this.currentUserInvoke()
          
        }
      })
    }
  }

  currentUserInvoke(){
    this.eventService.onInvokeNavComponentCurrentUser()
  }

}
