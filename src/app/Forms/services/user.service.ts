import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  checkIfUserExists(name: string): Observable<boolean> {
    const exists = name == null || name.toLowerCase() !== 'salli';
    return of(exists)
  }
}
