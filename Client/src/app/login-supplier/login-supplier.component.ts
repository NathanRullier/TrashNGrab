import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';




@Component({
  selector: 'app-login-supplier',
  templateUrl: './login-supplier.component.html',
  styleUrls: ['./login-supplier.component.css']
})
export class LoginSupplierComponent implements OnInit {
  
  
  firstName = "";
  lastName ="";
  emailAddress ="";
  Address ="";
  Password ="";
  ZipCode = "";

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  }
  onSignUp(): void
  {
    this.firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    this.lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    this.Password = (document.getElementById("passwd") as HTMLInputElement).value;
    this.emailAddress = (document.getElementById("email") as HTMLInputElement).value;
    this.Address = (document.getElementById("Address") as HTMLInputElement).value;
    this.ZipCode = (document.getElementById("Zip-Code") as HTMLInputElement).value;

    // let post_1 = 
    // console.log(post_1);
    this.http.post('http://localhost:3000/signup/producer', {

      "name": this.firstName + this.lastName,
      "password": this.Password,
      "email": this.emailAddress,
      "adress": this.Address,
      "zipcode": this.ZipCode

    }).subscribe(data=>{console.log(data)});

  }
}
