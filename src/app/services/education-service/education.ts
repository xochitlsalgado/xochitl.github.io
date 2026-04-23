import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private firestore: Firestore) {}

  getEducation(): Observable<any[]> {
    const ref = collection(this.firestore, 'education');
    return collectionData(ref, { idField: 'id' });
  }
}
