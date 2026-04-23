import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private firestore: Firestore) {}

  getWorkExperience(): Observable<any[]> {
    const ref = collection(this.firestore, 'work-experience');
    return collectionData(ref, { idField: 'id' });
  }
}
