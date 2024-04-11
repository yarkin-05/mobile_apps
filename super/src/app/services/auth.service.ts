import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) {}

  async loginUser(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async registerUser(email: string, password: string) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
  

