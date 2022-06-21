import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  collapsed = true;
  constructor(private route:Router,) { }

  ngOnInit(): void {
  }
  logout(){
    // localStorage.clear()
    alert("Logout Successful !!")
    this.route.navigate(['/login']);
  }
}
