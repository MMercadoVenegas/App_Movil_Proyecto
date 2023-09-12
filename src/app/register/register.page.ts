import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  userData = {
    username: '',
    password: '',
  };

  constructor() {}

  register() {
    // Valida y almacena los datos del usuario en el almacenamiento local
    if (this.userData.username && this.userData.password) {
      localStorage.setItem('user', JSON.stringify(this.userData));
    }
  }
}
