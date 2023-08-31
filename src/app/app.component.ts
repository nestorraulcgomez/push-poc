import { Component, OnInit } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
import * as Smartlook from 'cordova-plugin-smartlook';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private firebaseX: FirebaseX,
    private platform: Platform
  ) {}
  ngOnInit(): void {
    console.log("ngOnInit");
    this.platform.ready().then(async (source) => {
      if (source === "cordova") {
        this.firebaseX.getToken().then(token =>{
          console.log(`The token is ${token}`)
        })

        this.firebaseX.onMessageReceived().subscribe(data => {
          console.log(`FCM message: ${data}`)
        });
        Smartlook.setProjectKey({key: '9b73e83febd539d3b3e7f2cec80c1f7ff8706e75'});
        Smartlook.setWebViewSensitivity({ isSensitive: true });
        Smartlook.start();
      }
    });
  }
}
