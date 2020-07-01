import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      const result = data as any
      console.log(result)
      if (result.success) {
        this.authService.storeUserData(result.token, result.user)
        this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000})
      } else {
        this.flashMessage.show(result.msg, {cssClass: 'alert-danger', timeout: 5000})
        this.router.navigate(['login'])
      }
    })
  }

}
