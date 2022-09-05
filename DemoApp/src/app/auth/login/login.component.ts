import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
 
})
export class LoginComponent implements OnInit {
  
  form: FormGroup
  constructor() { 
    
  }

  ngOnInit() {
    this.form = new FormGroup( controls: {
      email: new FormControl(formState: null, validatorOrOpts: [Validators.required, Validators.email])
      password: new FormControl( formState:null, ValidatorOrOpts: [Validators.required, Validators.minLength(minLength: 6 )])
    })
  }
  onSubmit()
}
