import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private firestore: Firestore) {}

  getLanguages(): Observable<any[]> {
    const ref = collection(this.firestore, 'languages');
    return collectionData(ref, { idField: 'id' });
  }
}
