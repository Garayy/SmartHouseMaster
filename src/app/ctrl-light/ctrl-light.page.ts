import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-ctrl-light',
  templateUrl: './ctrl-light.page.html',
  styleUrls: ['./ctrl-light.page.scss'],
})
export class CtrlLightPage implements OnInit {
  focos: any;
  foco: any;
  foco2:any;
  foco3:any;
  constructor(private navController: NavController, public restService: RestService) { }
  lamp1:number=0;
  lamp2:number=0;
  lamp3:number=0;
  on:string="radio-button-on-outline";
  off:string="radio-button-off-outline";
  ngOnInit() {
  }
  backToMenu(){
    this.navController.navigateBack("home");
  }
  onClick(lamp){
    console.log("entro");
    if(lamp=="lamp1")
    {

      if (this.lamp1) {
        this.lamp1=0;
        this.updateFoco1_();
        this.getAllFocos();
      }else{
        this.lamp1=1;
        this.updateFoco1();
        this.getAllFocos();
      }
    }
    if(lamp=="lamp2")
    {

      if (this.lamp2==0) {
        this.lamp2=1;
        this.updateFoco2();
        this.getAllFocos();
      }else{
        this.lamp2=0;
        this.updateFoco2_();
        this.getAllFocos();
      }
    }
    if(lamp=="lamp3")
    {

      if (this.lamp3==0) {
        this.lamp3=1;
        this.updateFoco3();
        this.getAllFocos();
      }else{
        this.lamp3=0;
        this.updateFoco3_();
        this.getAllFocos();
      }
    }
    
  }
///Cambiar metodo de foco1////

updateFoco1(){
  const focos = {
    id:'1',
    estado: 1
  };
  this.restService.updateTask(focos)
  .subscribe(foco => {
    console.log(foco);
  })
}
updateFoco1_(){
  const focos = {
    id:'1',
    estado: 0
  };
  this.restService.updateTask(focos)
  .subscribe(foco => {
    console.log(foco);
  })
}
////////////CAMBIAR METODO DE FOCO2////////////////
updateFoco2(){
  const focos = {
    id:'2',
    estado: 1
  };
  this.restService.updateTask(focos)
  .subscribe(foco => {
    console.log(foco);
  })
}
updateFoco2_(){
  const focos = {
    id:'2',
    estado: 0
  };
  this.restService.updateTask(focos)
  .subscribe(foco => {
    console.log(foco);
  })
}
////////////CAMBIAR METODO DE FOCO2//////////////
updateFoco3(){
  const focos = {
    id:'3',
    estado: 1
  };
  this.restService.updateTask(focos)
  .subscribe(foco => {
    console.log(foco);
  })
}
updateFoco3_(){
  const focos = {
    id:'3',
    estado: 0
  };
  this.restService.updateTask(focos)
  .subscribe(foco => {
    console.log(foco);
  })
}
/////////////////////////
getAllFocos(){
  this.restService.getAll()
  .subscribe(focos => {
    console.log(focos);
  });
}
}
