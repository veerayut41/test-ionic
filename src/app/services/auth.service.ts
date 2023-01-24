import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth, public fireStore: Firestore) { }

  


}
