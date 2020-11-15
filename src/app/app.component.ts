import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appCompras';

  ngOnInit() {
    firebase.default.initializeApp({
      apiKey: "AIzaSyBsCDJePe6F9kOTIxypkcVd9vByn6XVuJg",
      authDomain: "comprasapp-30081.firebaseapp.com",
    
    });
  }
}
