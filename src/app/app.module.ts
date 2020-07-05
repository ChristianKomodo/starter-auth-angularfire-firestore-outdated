import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SuperSecretComponent } from './super-secret/super-secret.component';

@NgModule({
  declarations: [AppComponent, SuperSecretComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDV03XDoV7Wo6Q49uH-BzeF0q9m0-75xgM',
      authDomain: 'tomtomcms-b09f3.firebaseapp.com',
      databaseURL: 'https://tomtomcms-b09f3.firebaseio.com',
      projectId: 'tomtomcms-b09f3',
      storageBucket: 'tomtomcms-b09f3.appspot.com',
      messagingSenderId: '46123510046',
      appId: '1:46123510046:web:8722891557fe86af3a810f'
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
