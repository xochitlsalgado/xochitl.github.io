import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private firestore: Firestore) {}

  getHeader(): Observable<any[]> {
    const ref = collection(this.firestore, 'header');
    return collectionData(ref, { idField: 'id' });
  }
}
