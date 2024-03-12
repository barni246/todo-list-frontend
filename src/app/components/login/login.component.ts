import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

constructor(private as:AuthService, private router: Router) {

}

  async login() {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const raw = JSON.stringify({
    //   "username": this.username,
    //   "password": this.password
    // });

    // const requestOptions: RequestInit = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };
    try {
      let resp = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      // let resp = await fetch(enviroment.baseUrl+"/login/", requestOptions);
      // // let resp = await fetch("http://localhost:8000/login/", requestOptions);
      // let json = await resp.json();
      // localStorage.setItem('token', json.token);
      // TODO: Redirect
      this.router.navigateByUrl('/todos')
    } catch(e){
      // Show error message
      alert('Login ist fehlgeschlagen!');
      console.error(e);

    }
  }

  

}
