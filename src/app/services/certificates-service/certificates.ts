import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private firestore: Firestore) {}

  getCertificates(): Observable<any[]> {
    const ref = collection(this.firestore, 'certificates');
    return collectionData(ref, { idField: 'id' });
  }
}
