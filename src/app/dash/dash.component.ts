import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
) { }

  ngOnInit() {
    const sid = sessionStorage.getItem('sid');
    if (!sid) {
      this.router.navigate(['login']);
    }
  }
  logout(){
    sessionStorage.removeItem('sid');
    this.router.navigate(['HomePage']);
  }
}
 

