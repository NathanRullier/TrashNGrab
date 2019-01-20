import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

    
  firstName = "";
  lastName ="";
  emailAddress ="";
  Password ="";


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSignUpClient(): void{
    this.firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    this.lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    this.Password = (document.getElementById("passwd") as HTMLInputElement).value;
    this.emailAddress = (document.getElementById("email") as HTMLInputElement).value;


    let post_1 = {

      "name": this.firstName + this.lastName,
      "password": this.Password,
      "email": this.emailAddress

    }
    this.http.post('http://localhost:3000/signup/consumer', (post_1)).subscribe(data=>{console.log(data)});
    }

    onSignInClient(): void{

      const name = (document.getElementById("login-username") as HTMLInputElement).value;

      this.Password = (document.getElementById("login-password") as HTMLInputElement).value;
  
  
      let post = {
  
        "name": name,
        "password": this.Password
  
      }
      this.http.post('http://localhost:3000/signin/consumer', (post)).subscribe(data=>{console.log(data)});
      }
}
