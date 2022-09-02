import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'DemoApp';
 
 
  login() {

  }
  constructor() {
    console.log('-');
  }
  ngOnInit(){
    console.log(1);
  }
  ngAfterViewInit(){
    console.log(2);
  }
  ngAfterViewChecked(){
    console.log(3);
  }
  }

