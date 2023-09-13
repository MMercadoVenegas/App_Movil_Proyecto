import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  register() {
    // Valida y almacena los datos del usuario en el almacenamiento local
    if (this.userData.username && this.userData.password) {
      localStorage.setItem('user', JSON.stringify(this.userData))
      this.router.navigate(['/login']);
    } else {
      // Muestra un mensaje de error o realiza acciones adecuadas si los campos no están llenos
    }
  }
}
  

