import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public frmData: any;
  constructor() {
    this.frmData = { email: '', password: ''};
   }

  ngOnInit() {
  }

}
