import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6whYU9IuasekTxtQpSk69-ObOX0uhheA",
  authDomain: "mycv-85d18.firebaseapp.com",
  projectId: "mycv-85d18",
  storageBucket: "mycv-85d18.firebasestorage.app",
  messagingSenderId: "261777449590",
  appId: "1:261777449590:web:d6686f1421b6f2eae03557"

};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
