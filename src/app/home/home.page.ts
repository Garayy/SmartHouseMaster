import { Component } from "@angular/core";
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

//const apiUrl = 'https://smarthouse-cfdc2.firebaseio.com';
const ApiPuertas = 'https://smarthouse-cfdc2.firebaseio.com/leds/'
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  Items:any;
  tools = [
    {
    name:"Puertas y Ventanas",
    imgUrl:"../../assets/img/tool1-2.png"
  },
  {
    name:"Luces",
    imgUrl:"../../assets/img/tool2-2.jpg"
  },
  {
    name:"Cámaras",
    imgUrl:"../../assets/img/tool3.jpg"
  },
];
  slideOps = {
      initialSlide: 0,
      slidesPerView: 1,
      centeredSLides: true,
      speed: 400
  };
  alertError1:string="";

 

  constructor(private navController: NavController, private toastController: ToastController, private http: HttpClient, public servicio : RestService) {

  }

  async requiredVip() {
    const toast = await this.toastController.create({
      message: 'Pronto podrás disfrutar de eta opción!',
      duration: 3000
    });
    toast.present();
  }
/* BORRADOR*/

/* abrirPuerta1(){
  Metodo get para saber si esta abierto
  get... (ApiPuertas + 'servo.json')
   console.log(response)
  guardar en variable el response

  if response =0 ... Abrir
        PUT... la liga de arriba con el parametro jsntmp
        const jsntmp={
	          "estado":1
          }

  else ... cerrar
          PUT... la liga de arriba con el parametro jsntmp
        const jsntmp={
	          "estado":0
          }
}
 */
/* BORRADOR
 abrirPuerta2(){
  Metodo get para saber si esta abierto
  get... 'https://smarthouse-cfdc2.firebaseio.com/servos/' + 'servo1.json'
   console.log(response)
  guardar en variable el response

  if response =0 ... Abrir
        PUT... la liga de arriba.
  else ... cerrar
}
 */



  selectTool(nameTool){
    if (nameTool=="Puertas y Ventanas") {
      this.navController.navigateForward("/ctrl-doors")
    }
    if (nameTool=="Luces") {
      this.navController.navigateForward("/ctrl-light")
    }
    if (nameTool=="Cámaras") {
      // alert("Esta opcion es solo PREMIUM");
      this.requiredVip();
    }
  }
}
