import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-knot',
  templateUrl: './knot.component.html',
  styleUrls: ['./knot.component.css']
})
export class KnotComponent implements OnInit {
  public invalidCred=false;
  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    Password: ['', Validators.required],
  })

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
) { }

  ngOnInit() {
  }
  async loginProcessHere(){
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/auth-user";
    const result:any = await this.http.post(url, data).toPromise();
    console.log(result);
    if(result.opr)
    {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['dashboard']);
    }
    else {
      this.invalidCred = true;
      this.fbFormGroup.reset();
    }
    //this.router.navigate(['HomePage']);
  }

}
