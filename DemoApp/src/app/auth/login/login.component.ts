import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  form!: FormGroup
  constructor() {
    setTimeout(() => {
      console.log(this.form)
    }, 2000);
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('tiko@gmail.com', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)]
      })
    })
  }
  onSubmit(): void {
    if (this.form.status === 'VALID') {
      // get registerd user from local storage
      // read
      // if user and password matches
      // alert('Login')
      // else 
      // alert('email and password is wrong')
    }
    console.log(this.form)
  }
}
