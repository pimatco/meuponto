import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PersonPontoPage } from '../pages/person-ponto/person-ponto';
import { HorariosUserPage } from '../pages/horarios-user/horarios-user';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonPontoPage,
    HorariosUserPage
  ],
  imports: [
    AngularFireModule.initializeApp({        
      apiKey: "<<your>>",
      authDomain: "<<your>>",
      databaseURL: "<<your>>",
      projectId: "<<your>>",
      storageBucket: "<<your>>",
      messagingSenderId: "<<your>>"
    }),                        
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonPontoPage,
    HorariosUserPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
