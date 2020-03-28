import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonSegment, IonSegmentButton, IonLabel, IonIcon, IonToolbar, IonContent } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-ctrl-doors',
  templateUrl: './ctrl-doors.page.html',
  styleUrls: ['./ctrl-doors.page.scss'],
})
export class CtrlDoorsPage implements OnInit {
  type: string;
  servos: any;
  servo: any;
  door1:number=0;
  door2:number=0;
  constructor(private navController: NavController, private toastController: ToastController, public restService: RestService) { }
  urlDoorOpen:string="../../assets/img/doorOpen1.PNG";
  ngOnInit() {
  }
  async requiredVip() {
    const toast = await this.toastController.create({
      message: 'Pronto podrás disfrutar de eta opción!',
      duration: 3000
    });
    toast.present();
  }


  backToMenu(){
    this.navController.navigateBack("home");
  }
  segmentChanged( event ) {
    const valorSegmento = event.detail.value;

    if(valorSegmento=="close"){
      console.log("tacerrado");
      console.log(valorSegmento);
      this.updateServo1_();
      this.getAllServo();
    }else{
      console.log("taabierto");
      console.log(valorSegmento);
      this.updateServo1();
      this.getAllServo();
    }
  }
  segmentChanged2( event ) {
    const valorSegmento = event.detail.value;

    if(valorSegmento=="close2"){
      console.log("tacerrado2");
      console.log(valorSegmento);
      this.updateServo2_();
      this.getAllServo();
    }else{
      console.log("taabierto2");
      console.log(valorSegmento);
      this.updateServo2();
      this.getAllServo();
    }
  }

  ///Cambiar metodo de SERVO1////

updateServo1(){
  const servos = {
    id:'1',
    estado: 1
  };
  this.restService.updateServos(servos)
  .subscribe(servo => {
    console.log(servo);
  })
}
updateServo1_(){
  const servos = {
    id:'1',
    estado: 0
  };
  this.restService.updateServos(servos)
  .subscribe(servo => {
    console.log(servo);
  })
}
////////////CAMBIAR METODO DE SERVO2////////////////
updateServo2(){
  const servos = {
    id:'2',
    estado: 1
  };
  this.restService.updateServos(servos)
  .subscribe(servo => {
    console.log(servo);
  })
}
updateServo2_(){
  const servos = {
    id:'2',
    estado: 0
  };
  this.restService.updateServos(servos)
  .subscribe(servo => {
    console.log(servo);
  })
}
  // onClick(door){
  //   console.log("entro");
  //   if(door=="door1")
  //   {

  //     if (this.door1) {
  //       this.door1=0;

  //     }else{
  //       this.door1=1;

  //     }
  //   }
  //   if(door=="door2")
  //   {

  //     if (this.door2==0) {
  //       this.door2=1;
  //     }else{
  //       this.door2=0;
  //     }
  //   }
  // }
  getAllServo(){
    this.restService.getAllServos()
    .subscribe(servos => {
      console.log(servos);
    });
  }
}
