import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"]
})
export class IntroPage implements OnInit {
  slideOpt={

  };
  slides=[
    {
      title:"Hola",
      subTitle:"sub",
      description:"Loras asd asd asd ads as",
      icon:"play"

    },
    {
      title:"Hola 2",
      subTitle:"sub",
      description:"Loras asd asd asd ads as",
      icon:"people"

    },
    {
      title:"Hola 3",
      subTitle:"sub",
      description:"Loras asd asd asd ads as",
      icon:"home"

    }
  ];
  constructor(private router: Router, private storage: Storage) {}
  // 
  finish() {
    this.storage.set("InIntroShow", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {}

}
