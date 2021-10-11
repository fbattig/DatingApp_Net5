import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;
  constructor(private http: HttpClient) {  }

  ngOnInit(){
     this.http.get("https://localhost:5001/api/users").subscribe(response =>{
       this.users=response}
       , error => {
         console.log(error);
       });
  }
}
