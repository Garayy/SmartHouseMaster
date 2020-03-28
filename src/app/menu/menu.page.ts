import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }
  closeMenu(){
    this.menu.close();
  }

  logOut(){
    // this.storage.set("InUserLoggedIn",false)  ESTA TAMBIEN FUNCIONA
    this.storage.remove('InUserLoggedIn');
    this.navCtrl.navigateRoot('/login');

  }

}
