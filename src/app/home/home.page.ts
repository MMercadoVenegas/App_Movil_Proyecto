import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController si necesitas navegar entre páginas.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor(private navCtrl: NavController) {}
  ionViewDidEnter() {
    // Recupera el nombre de usuario del almacenamiento local
    const storedUserData = localStorage.getItem('user');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      // Asigna el nombre de usuario a la propiedad 'username' en la clase
      this.username = userData.username;
    }
  }

  logout() {
    // Elimina la información del usuario del almacenamiento local al cerrar sesión
    localStorage.removeItem('user');
    // Navega de vuelta a la página de inicio de sesión
    this.navCtrl.navigateRoot('/login');
  }
}

