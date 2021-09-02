import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signUpFormGroup!: FormGroup

  constructor(
    private formBuilder :FormBuilder,
    private authService :AuthService
    ) { }

  ngOnInit(): void {
    this.createSignUpFormGroup()
  }

  createSignUpFormGroup(){
    this.signUpFormGroup = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
      passwordAgain: ["",Validators.required]
    })
  }

  signUp(){
    if(this.signUpFormGroup.valid && (this.signUpFormGroup.get("password")?.value == this.signUpFormGroup.get("passwordAgain")?.value)){
      let signUp = Object.assign({},this.signUpFormGroup.value)
      this.authService.signUp(signUp).subscribe(response => {
        console.log(response)
      });
    }
  }

}
