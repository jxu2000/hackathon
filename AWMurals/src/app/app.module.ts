import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyA63N0-GMrzMrrqZ0eiST3pA0DF7xnMsjM",
    authDomain: "hackathon-c6bbc.firebaseapp.com",
    databaseURL: "https://hackathon-c6bbc.firebaseio.com",
    projectId: "hackathon-c6bbc",
    storageBucket: "hackathon-c6bbc.appspot.com",
    messagingSenderId: "1078477850584"
});

firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
