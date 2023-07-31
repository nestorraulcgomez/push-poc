import { Component, OnInit } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';

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
      }
    });
  }
}
