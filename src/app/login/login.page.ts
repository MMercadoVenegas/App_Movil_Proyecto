import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Propiedad para el nombre de usuario
  password: string = ''; // Propiedad para la contraseña


  constructor(private router: Router, private toastController: ToastController) {}

  login() {
    const storedUserData = localStorage.getItem('user');
  
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
  
      if (
        userData &&
        this.username === userData.username &&
        this.password === userData.password
      ) {
        // Inicio de sesión exitoso
        this.router.navigate(['/home']);
      } else {
        // Credenciales incorrectas
        this.mostrarErrorNombreNoExiste();
      }
    } else {
      // No se encontró información del usuario en el almacenamiento local
      this.mostrarErrorNombreNoExiste();
    }
  }

  async mostrarErrorNombreNoExiste() {
    const toast = await this.toastController.create({
      message: 'El nombre de usuario no existe en la base local',
      duration: 3000, // Duración en milisegundos (3 segundos en este caso)
      position: 'top', // Posición de la notificación (puedes cambiarla según tus preferencias)
      color: 'danger', // Color de la notificación (puedes personalizarlo)
    });
    toast.present();
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
}