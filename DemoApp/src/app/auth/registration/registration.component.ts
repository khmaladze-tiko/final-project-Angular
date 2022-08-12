import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  title = 'localStorage';
  myid!: any;
  myform!: any;
  ngOnInit() {
    this.display();
    this.myform = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      email : new FormControl(''),
      mobilenumber : new FormControl(''),
      password : new FormControl(''),
      repeatpassword : new FormControl('')
    });

    this.display();
  }
  display() {
    this.myid = localStorage.getItem('formdata');
  }
  onSubmit() {
    localStorage.setItem("formdata",JSON.stringify(this.myform.value));
  }
}
