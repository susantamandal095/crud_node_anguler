import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  // data_arrya : any =[];
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
    // this.data_arrya = JSON.parse(localStorage.getItem("data"));
  
  // console.log(this.data_arrya);
  }
  log_arrya : any = []
  go(){
    if(this.username == '' || this.username == undefined){
      this.webService.makeFocusById('username')
      alert("Enter valid Username !!")
      return
    }
    if(this.password == '' || this.password == undefined){
      this.webService.makeFocusById('password')
      alert("Enter valid Password !!")
      return
    }
    // if(this.username == this.data_arrya.email)
    // {
    //  if(this.username == this.data_arrya.email && this.password == this.data_arrya.password)
    //  {
    //   alert("Login Successful !!")
    //   this.route.navigate(['/home']);
    //  }
    //  else{
    //   alert("Invalid Username or Password")
    //   this.route.navigate(['/login']);
    //  }
    // }
    // else{
    //   alert("Username is not register pls sinup")
    //   this.route.navigate(['/login']);
    //  }
      // i will use for dyanimic below code ..............
      
this.webService.getRequest("/get_user").
subscribe(
  data => {
    this.log_arrya = data ? data : [];
    console.log(this.log_arrya)
    
for(let i of this.log_arrya)
{
  console.log(i.email)
  console.log(i.password)
    // if(this.username == i.email)
    // {
     if(this.username == i.email && this.password == i.password)
     {
      alert("Login Successful !!")
      this.route.navigate(['/home']);
     }
     else{
      alert("Invalid Username or Password")
      this.route.navigate(['/login']);
     }
    }
  //   else{
  //     alert("Username is not register pls sinup")
  //     this.route.navigate(['/login']);
  //    }
  // }
  },error => {
    alert("Something went wrong!!")
  }
);
  }
}
