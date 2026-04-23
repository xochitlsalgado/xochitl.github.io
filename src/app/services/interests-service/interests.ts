import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private firestore: Firestore) {}

  getInterests(): Observable<any[]> {
    const ref = collection(this.firestore, 'interests');
    return collectionData(ref, { idField: 'id' });
  }
}
