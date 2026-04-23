import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private firestore: Firestore) {}

  getSkills(): Observable<any[]> {
    const ref = collection(this.firestore, 'skills');
    return collectionData(ref, { idField: 'id' });
  }
}
